const {username, password} = require('../users.js');
const {chromium} = require('playwright');
const { test, expect } = require('@playwright/test');


test('goodAutorisation', async() => {
  const browser = await chromium.launch({headless: false, slowMo: 5000});
  const page = await browser.newPage();
  await page.goto('https://netology.ru/?modal=sign_in', {timeout: 60000});
  await page.pause();
  
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();

  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(username);

  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();

  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill(password);

  // Click [data-testid="login-submit-btn"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/profile' }*/),
    page.locator('[data-testid="login-submit-btn"]').click()
  ]);

  await expect().locator('[data-testid="menu-userface"] div');
  await browser.close();
});