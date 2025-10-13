class TextBox {
  constructor(page) {
    this.page = page;
    this.cards = page.locator('.card');
    this.header = page.locator('div.banner img'); // пример
  }
  async goto() {
    await this.page.goto('https://demoqa.com/');
  }
  async openCardByName(name) {
    await this.page.locator(`.card:has-text("${name}")`).click();
  }
}
module.exports = { TextBox };