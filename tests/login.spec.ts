import { test, expect } from '../fixtures/baseTest';

test.describe('Login Tests', () => {

  test('Valid Login', async ({ loginPage, page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory/);
  });

  test('Invalid Login', async ({ loginPage, page }) => {
    await loginPage.login('wrong_user', 'wrong_pass');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

  test('Empty Login', async ({ loginPage, page }) => {
    await loginPage.login('', '');
    await expect(page.locator('[data-test="error"]')).toBeVisible();
  });

});