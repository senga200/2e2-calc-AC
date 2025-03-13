import { test, expect } from '@playwright/test';


test.describe('calculator', () => {
test('h1', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Expect a title "to contain" a substring.
  await expect(page.locator('h1')).toHaveText('TITLE Calculator');
});
test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  //expect click on 1 display 1
  test('expect click on 1 display 1', async ({ page }) => {
    await page.goto('http://localhost:5173/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
});
});

test('clicking on 0 should display 0', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // Clique sur le bouton "0"
  await page.getByRole('button', { name: '0' }).click();

  // Vérifie que l'affichage contient bien "1"
  await expect(page.locator('.App-header > div:first-child')).toContainText('0');
});
