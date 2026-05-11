# exresors

Automated tests for the Exclusive Resorts inquiry form.

The repository contains Playwright end-to-end tests for the public inquiry page and a Postman/Newman collection for checking the `submit-form` API endpoint.

## Tech Stack

- Node.js
- Playwright Test
- Page Object Model
- Postman collection / Newman data set

## Project Structure

```text
.
├── fixtures/
│   └── baseTest.js                 # Playwright fixture with InquirePage
├── pages/
│   └── InquirePage.js              # Page object for the inquiry form
├── tests/
│   └── inquiry-form.spec.ts        # UI test cases for the inquiry form
├── newman/
│   ├── collection-test.postman_collection.json
│   ├── data.json
│   └── README
├── playwright.config.js            # Playwright configuration
├── package.json
└── README.md
```

## Prerequisites

- Node.js 18 or newer
- npm
- Google Chrome installed locally

The Playwright configuration runs tests with the `chrome` channel, so Chrome must be available on the machine.

## Installation

Install project dependencies:

```bash
npm install
```

Install the browser used by the Playwright project:

```bash
npx playwright install chrome
```

## Running UI Tests

Run all Playwright tests:

```bash
npx playwright test
```

Run the inquiry form test file only:

```bash
npx playwright test tests/inquiry-form.spec.ts
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

## Test Reports

The project uses the Playwright HTML reporter.

Open the latest report:

```bash
npx playwright show-report
```

Reports are generated in `playwright-report/`.

## UI Test Coverage

The current Playwright suite validates the inquiry form on:

- successful submission with valid data
- invalid email
- invalid name characters
- SQL-injection-like input in the name field
- unchecked privacy agreement checkbox

For the positive test case, the request to `**/submit-form**` is mocked with a successful response. Other cases expect the form validation error message to be visible.

## Page Object

`pages/InquirePage.js` contains the reusable actions and locators for the inquiry page:

- opening `https://exclusiveresorts.com/inquire/`
- accepting cookies when the cookie banner appears
- filling form fields
- submitting the form
- checking whether the validation error message is displayed

The page object is exposed to tests through `fixtures/baseTest.js` as `inquirePage`.

## Running API Tests With Newman

The `newman/` folder contains:

- `collection-test.postman_collection.json` - Postman collection for `https://exclusiveresorts.com/submit-form/`
- `data.json` - data-driven API scenarios

Run the collection with Newman:

```bash
npx newman run newman/collection-test.postman_collection.json \
  --iteration-data newman/data.json
```

If Newman is not installed yet, `npx` will download and run it for this command.

## Useful Commands

```bash
# Install dependencies
npm install

# Install Chrome for Playwright
npx playwright install chrome

# Run all UI tests
npx playwright test

# Open the HTML report
npx playwright show-report

# Run API collection
npx newman run newman/collection-test.postman_collection.json --d data.json
```

## Notes

- Tests interact with a live public website, so failures can be caused by UI changes, network issues, cookie banner changes, or backend validation changes.
- The Playwright config records traces with trace: 'on', which can help debug failed runs.
- package.json currently does not define npm scripts, so commands are run directly with npx.