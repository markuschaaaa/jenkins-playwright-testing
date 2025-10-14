import { test } from '@playwright/test';
import {TextBox} from '../pages/TextBoxPage.js'

test('correct email', async ({ page }) => {
  const textBox = new TextBox(page)

  await textBox.goto()

  await textBox.fillInputText('Hey Hey Heyyyy!')

  await textBox.fillInputEmail('chum@gmail.com')
});
