import { test, expect } from '../fixtures/baseTest.js';

export const testDataSet = [
  {
  id: 'TC-01',
  type: 'Functional @smoke @regression',
  desc: 'Successful Submission (Valid Data)',
  firstName: 'John',
  lastName: 'Doe',
  email: 'test@ukr.net',
  postalCode: '12345',
  phone: '+380931112233',
  privacyCheckbox: true,
  isPositive: true
},
{
  id: 'TC-08',
  type: 'Validation @negative @regression',
  desc: 'Invalid email',
  firstName: 'Jane',
  lastName: 'Smith',
  email: 'jane.smith@test.com',
  postalCode: '90210',
  phone: '+12025550101',
  privacyCheckbox: true,
  isPositive: false
},
{
  id: 'TC-03',
  type: 'Validation @negative',
  desc: 'Invalid Name Characters',
  firstName: 'John123',
  lastName: '!@#',
  email: 'valid@email.com',
  postalCode: '12345',
  phone: '+380931112233',
  privacyCheckbox: true,
  isPositive: false
},
{
  id: 'TC-12',
  type: 'Security @negative',
  desc: 'SQL Injection in Name Field',
  firstName: "' OR 1=1 --",
  lastName: 'Doe',
  email: 'hacker@evil.com',
  postalCode: '00000',
  phone: '+380000000000',
  privacyCheckbox: true,
  isPositive: false
},
{
  id: 'TC-11',
  type: 'Security @negative',
  desc: 'XSS Injection in Name Field',
  firstName: '<script>alert("XSS")</script>',
  lastName: 'Doe',
  email: 'attacker@test.com',
  postalCode: '12345',
  phone: '+380000000000',
  privacyCheckbox: true,
  isPositive: false
},
{
  id: 'TC-09',
  type: 'Validation @smoke @negative @regression',
  desc: 'Unchecked privacyCheckbox false',
  firstName: 'John',
  lastName: 'Doe',
  email: 'test@ukr.net',
  postalCode: '12345',
  phone: '+380931112233',
  privacyCheckbox: false,
  isPositive: false
}
];
let successRegistrationText = `We appreciate your interest.`

for (const data of testDataSet) {
  
  test(`Inquiry Form: ${data.desc} @${data.type}`, async ({ page, inquirePage }) => {
    
  if(data.isPositive) {
    await page.route('**/submit-form**', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ data: { id: 126462413222 } }),
      });
    });
  }

    await inquirePage.navigate();
    await inquirePage.acceptCookies();
    
    await inquirePage.fillForm({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      postalCode: data.postalCode,
      phone: data.phone,
      privacyCheckbox: data.privacyCheckbox
    });

   
    await inquirePage.submit();
    
    let errorMessage = await inquirePage.isErrorMessageDisplayed();

    expect(errorMessage).toBe(!data.isPositive)

    if( data.isPositive ){
      await expect(await inquirePage.successRegistrationMessage()).toBeVisible({timeout: 5000});
    }

  });
}