# BUG-01 — Valid Gmail Address Rejected

- **Severity:** High
- **Priority:** High
- **Type:** Validation

## Preconditions
User opens inquiry form.

## Steps to Reproduce
1. Open inquiry form.
2. Fill all required fields with valid data.
3. Enter `a@gmail.com` into Email field.
4. Click Submit.

## Actual Result
Email is marked as invalid and form submission is blocked.

## Expected Result
`a@gmail.com` should be accepted as a valid email address.

---

# BUG-02 — Missing Postal Code Validation

- **Severity:** Medium
- **Priority:** High
- **Type:** Validation

## Preconditions
User opens inquiry form.

## Steps to Reproduce
1. Open inquiry form.
2. Enter invalid postal code values:
   - `1`
   - `abc`
   - `@@@@`
3. Fill remaining required fields.
4. Click Submit.

## Actual Result
Form is submitted successfully with invalid postal code.

## Expected Result
Postal Code should validate format and length according to region rules.

---

# BUG-03 — Incorrect Phone Codes in Dropdown

- **Severity:** Medium
- **Priority:** Medium
- **Type:** Data / UI

## Preconditions
User opens inquiry form.

## Steps to Reproduce
1. Open Phone country code dropdown.
2. Review available country codes.

## Actual Result
Some country codes are incorrect or mismatched with countries.

## Expected Result
All country codes should match correct international dialing standards.

---

# BUG-04 — Backend Does Not Validate Phone Number

- **Severity:** High
- **Priority:** High
- **Type:** Backend Validation

## Preconditions
User opens inquiry form.

## Steps to Reproduce
1. Enter invalid phone number:
   - `123`
   - `abcdef`
   - `@@@@@@`
2. Fill remaining required fields.
3. Click Submit.

## Actual Result
Backend accepts invalid phone number and form submits successfully.

## Expected Result
Backend should reject invalid phone number formats.

---

# BUG-05 — Submit Button Active with Empty Required Fields

- **Severity:** Medium
- **Priority:** High
- **Type:** UI / Validation

## Preconditions
User opens inquiry form.

## Steps to Reproduce
1. Open inquiry form.
2. Leave required fields empty.
3. Observe Submit button state.

## Actual Result
Submit button remains enabled.

## Expected Result
Submit button should remain disabled until all required fields are completed correctly.

---

# BUG-06 — Form Can Be Submitted with Invalid Email

- **Severity:** High
- **Priority:** High
- **Type:** Validation

## Preconditions
User opens inquiry form.

## Steps to Reproduce
1. Enter invalid email:
   - `invalid-email`
   - `test@`
2. Fill remaining required fields.
3. Click Submit.

## Actual Result
Form submission is triggered despite invalid email.

## Expected Result
Submission should be blocked until valid email format is provided.

---

# BUG-07 — Debug Logging Visible in Production Environment

- **Severity:** Medium
- **Priority:** Medium
- **Type:** Security / Maintenance

## Preconditions
User opens production environment.

## Steps to Reproduce
1. Open browser DevTools.
2. Navigate through inquiry form.
3. Observe browser console logs.

## Actual Result
Debug or development logs are visible in production console.

## Expected Result
Debug logging should be disabled in production environment.

---

# BUG-08 — Hydration Mismatch Error in Browser Console

- **Severity:** Medium
- **Priority:** Medium
- **Type:** Frontend / React Hydration

## Preconditions
User opens inquiry form page.

## Steps to Reproduce
1. Open browser DevTools.
2. Navigate to inquiry form page.
3. Observe browser console.

## Actual Result
Console displays:
```text
Hydration completed but contains mismatches.
```

## Expected Result
No hydration or rendering mismatch errors should appear in browser console.


# BUG-09 — Name Fields Accept Numeric Values

- **Severity:** Medium
- **Priority:** High
- **Type:** Input Validation

## Actual Result
First Name and Last Name fields accept numeric-only values (`1`).

## Expected Result
Name fields should allow alphabetic characters only.