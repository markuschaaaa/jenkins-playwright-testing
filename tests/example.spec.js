// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/text-box');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/DEMOQA/);
});

test('correct input', async ({ page }) => {
  const nameInput = page.locator('input#userName');
  await page.goto('https://demoqa.com/text-box');
  await nameInput.fill('Hey There!');

  // Expect a title "to contain" a substring.
  await expect(nameInput).toHaveValue(/Hey There!/);
});
