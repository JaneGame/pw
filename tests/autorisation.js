const {username, password} = require('../users.js');
const {chromium} = require('playwright');

(async() => {
  const browser = await chromium.launch({headless: false, slowMo: 5000});
  const page = await browser.newPage();
  await page.goto('https://netology.ru/?modal=sign_in');
  await page.fill('[placeholder=\'Email\']', username);
  await page.fill('[placeholder=\'Пароль\']', password);
  page.click('//button[text()=\'Войти\']');
  await expect(
    page.locator('.components-pages-Profile-Programs--title--NCjbp')
  ).toHaveText('Мои курсы и профессии');
  await browser.close();
})();