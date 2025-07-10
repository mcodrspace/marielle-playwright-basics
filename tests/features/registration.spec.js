import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Admin Page' }).click();
    await page.getByRole('button', { name: 'Clean' }).click();
});

test('Verify that user is able to register an account', async ({ page }) => {
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');
    await page.getByRole('link', { name: 'Register' }).click();
    await page.locator('[id="customer.firstName"]').fill('Marielle');
    await page.locator('[id="customer.lastName"]').fill('Test');
    await page.locator('[id="customer.address.street"]').fill('Cornelia St');
    await page.locator('[id="customer.address.city"]').fill('New York');
    await page.locator('[id="customer.address.state"]').fill('New York');
    await page.locator('[id="customer.address.zipCode"]').fill('10014');
    await page.locator('[id="customer.phoneNumber"]').fill('13235103202');
    await page.locator('[id="customer.ssn"]').fill('987654');
    await page.locator('[id="customer.username"]').fill('marielle.test');
    await page.locator('[id="customer.password"]').fill('testing123');
    await page.locator('#repeatedPassword').fill('testing123');

    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.locator('h1.title')).toBeVisible();
    await expect(page.locator('h1.title')).toContainText(/Welcome/);
});