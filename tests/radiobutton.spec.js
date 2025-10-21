import { test } from '@playwright/test';
import { RadioButton } from '../pages/Elements/RadioButtonPage';

test('radio button check', async ({page})=>{
   const radioButton = new RadioButton(page)

   await radioButton.goto();
   await radioButton.checkYesButton()
   await radioButton.checkImpressiveButton()
   await radioButton.checkNoButton()
})