import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});

test('successful login', async ({ page }) => {
    // Input valid credentials
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    // Verify URL
    await expect(page).toHaveURL(/inventory.html/);

    // Swag Labs should be visible
    await expect(page.getByText('Swag Labs')).toBeVisible();

    // Product list should be visible
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    
    // Test screenshot
    await page.screenshot({ path: 'test-screenshots/successful-login.png', fullPage: true })
});

test('unsuccessful login', async ({ page }) => {
    // Input invalid credentials
    await page.locator('[data-test="username"]').fill('wrong_user');
    await page.locator('[data-test="password"]').fill('wrong_password');

    await page.locator('[data-test="login-button"]').click();

    // Error message should be visible
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');

    await page.screenshot({ path: 'test-screenshots/unsuccessful-login.png', fullPage: true })
});

test('blocked login for locked out user', async ({ page }) => {
    // Input blocked credentials
    await page.locator('[data-test="username"]').fill('locked_out_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');

    await page.locator('[data-test="login-button"]').click();

    // Error message should be visible
    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');

    await page.screenshot({ path: 'test-screenshots/blocked-login.png', fullPage: true })
});