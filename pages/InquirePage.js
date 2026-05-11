export class InquirePage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('First');
    this.lastNameInput = page.getByPlaceholder('Last');
    this.emailInput = page.getByPlaceholder('name@example.com');
    this.postalCodeInput = page.getByPlaceholder('Postal Code');
    this.phoneInput = page.locator('input[name="telephone"]');
    this.emailRadio = page.getByText('Email', { exact: true });
    this.privacyCheckbox = page.locator('.agreement [data-type="checkbox"]');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.acceptAllCookies = page.getByText('Accept All');
    this.errorMessage = page.getByText('There was a problem with your submission. Please review the fields below.');
  }

  async navigate() {
    await this.page.goto('https://exclusiveresorts.com/inquire/');
  }

  async acceptCookies() {
    await this.acceptAllCookies.waitFor({ state: 'visible', timeout: 5000 }).catch(() => {});
    if (await this.acceptAllCookies.isVisible()) {
      await this.acceptAllCookies.click();
    }
  }

  async fillForm(userData) {
    await this.firstNameInput.waitFor({ state: 'visible' });
    
    await this.firstNameInput.fill(userData.firstName);
    await this.lastNameInput.fill(userData.lastName);
    await this.emailInput.fill(userData.email);
    await this.postalCodeInput.fill(userData.postalCode);
    await this.phoneInput.fill(userData.phone);
    await this.emailRadio.click();
    console.log('userData.privacyCheckbox '+userData.privacyCheckbox)
    if(userData.privacyCheckbox){
      await this.privacyCheckbox.click();
    }
    
  }

  async submit() {
  const responsePromise = this.page.waitForResponse(response => 
      response.url().includes('validate-email') && response.request().method() === 'POST'
    );

    await this.submitButton.click();  

    return await responsePromise;
  }

  async isErrorMessageDisplayed(){
    return await this.errorMessage.isVisible();
  }
}