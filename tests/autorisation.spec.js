const user = require('../user.js');

const { test, expect } = require('@playwright/test');

test.use({ headless: false, slowMo: 5000 });

test('goodAutorisation', async ({page}) => {
  
  test.setTimeout(60000);
  await page.goto('https://netology.ru/?modal=sign_in', { timeout: 60000 });
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(user.username);
  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill(user.password);
  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();
  const locator = page.locator('[data-testid="menu-userface"] div');
  await expect(locator).toBeVisible({ timeout: 60000 });
  await page.close();
});

test('badAutorisation', async ({page}) => {
  
  test.setTimeout(60000);
  await page.goto('https://netology.ru/?modal=sign_in', { timeout: 60000 });
  // Click [placeholder="Email"]
  await page.locator('[placeholder="Email"]').click();
  // Fill [placeholder="Email"]
  await page.locator('[placeholder="Email"]').fill(user.username);
  // Click [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').click();
  // Fill [placeholder="Пароль"]
  await page.locator('[placeholder="Пароль"]').fill(user.incorrectPassword);
  // Click [data-testid="login-submit-btn"]
  await page.locator('[data-testid="login-submit-btn"]').click();
  const locator = page.locator('[data-testid="login-error-hint"]');
  await expect(locator).toBeVisible({ timeout: 60000 });
  await page.close();
});