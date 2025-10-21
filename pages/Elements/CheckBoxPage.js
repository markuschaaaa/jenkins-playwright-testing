import { expect } from '@playwright/test';

export class CheckboxPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/checkbox';
    this.mainCheckBox = page.locator('span.rct-checkbox svg.rct-icon').first();
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async expectChecked() {
    await this.mainCheckBox.click();
    await expect(this.mainCheckBox).toHaveClass(/rct-icon-check/);
  }

  async expectUnchecked() {
    await this.mainCheckBox.click();
    await expect(this.mainCheckBox).toHaveClass(/rct-icon-uncheck/);
  }
}