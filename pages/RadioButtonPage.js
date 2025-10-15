import { expect } from '@playwright/test';

export class RadioButton{
   constructor(page){
      this.page = page;
      this.url = 'https://demoqa.com/radio-button'
      this.positiveButton = page.locator('input#yesRadio')
      this.impressiveButton = page.locator('input#yRadio')
      this.negativeButton = page.locator('input#yRadio')
   }
}