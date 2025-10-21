import { expect } from '@playwright/test';

export class RadioButton{
   constructor(page){
      this.page = page;
      this.url = 'https://demoqa.com/radio-button'
      this.positiveButton = page.locator('label[for="yesRadio"]')
      this.impressiveButton = page.locator('label[for="impressiveRadio"]')
      this.negativeButton = page.locator('label[for="noRadio"]')
      this.selectedText = page.locator('span.text-success')
   }
   async goto(){
      await this.page.goto(this.url)
   }

   async checkYesButton(){
      await this.positiveButton.click()
      await expect(this.selectedText).toContainText('Yes')
   }
   async checkImpressiveButton(){
      await this.impressiveButton.check()
      await expect(this.selectedText).toContainText('Impressive')
   }
   async checkNoButton(){
      await expect (this.negativeButton).toBeDisabled()
   }
}