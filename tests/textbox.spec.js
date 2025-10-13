import { test, expect } from '@playwright/test';
const { TextBox } = require('../pages/TextBoxPage');

test('open elements card', async ({ page }) => {
  const home = new TextBox(page);
  await home.goto();
  await home.openCardByName('Elements');
  await expect(page).toHaveURL(/.*elements/);
});