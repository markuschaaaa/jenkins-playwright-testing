import { test, expect } from '@playwright/test';

test('correct input', async ({ page }) => {
  const nameInput = page.locator('input#userName');
  await page.goto('https://demoqa.com/text-box');
  await nameInput.fill('Hey There!');

  // Expect a title "to contain" a substring.
  await expect(nameInput).toHaveValue(/Hey There!/);
});

test('correct email', async ({ page }) => {
  const nameInput = page.locator('input#userEmail');
  const submitButton = page.locator('button#submit');
  await page.goto('https://demoqa.com/text-box');
  await nameInput.fill('test@gmail.com');
  await submitButton.click()
  await expect(nameInput).not.toHaveClass(/mr-sm-2 field-error form-control/);
});
