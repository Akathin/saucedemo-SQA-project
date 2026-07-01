const { test, expect } = require('@playwright/test');

test.describe('Login Tests', () => {

  test('TC-LOGIN-001 Valid Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

  test('TC-LOGIN-002 Invalid Password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    const error = page.locator('[data-test="error"]');
    await expect(error).toContainText('Epic sadface');
  });

  test('TC-LOGIN-007 Locked User', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'locked_out_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    const error = page.locator('[data-test="error"]');
    await expect(error).toContainText('locked out');
  });

});