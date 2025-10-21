import { expect } from '@playwright/test';

export class TextBox {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/text-box'
    this.inputName = page.locator('input#userName');
    this.inputEmail = page.locator('input#userEmail');
    this.submitButton = page.locator('button#submit');
  }
  async goto() {
    await this.page.goto(this.url);
  }


  async fillInputText(value){
    await this.inputName.fill(value);
    await expect(this.inputName).toHaveValue(value);
  }

  async fillInputEmail(value){
    await this.inputEmail.fill(value);
    await expect(this.inputEmail).toHaveValue(value);
    await this.submitButton.click()
    await expect(this.inputEmail).not.toHaveClass(/mr-sm-2 field-error form-control/);
  }
}