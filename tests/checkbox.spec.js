import { test } from '@playwright/test';
import { CheckboxPage } from '../pages/Elements/CheckBoxPage.js';

test('check main checkbox', async ({ page }) => {
  const checkboxPage = new CheckboxPage(page); 
  await checkboxPage.goto();
  await checkboxPage.expectChecked();
  await checkboxPage.expectUnchecked();
});