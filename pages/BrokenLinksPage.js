import { expect } from '@playwright/test';

export class BrokenLinks{
   constructor(page){
      this.page = page;
      this.url = 'https://demoqa.com/broken',
      this.validImg = page.locator('img').nth(2),
      this.brokenImg = page.locator('img').nth(3),
      this.validLink = page.getByRole('link', { name: 'Click Here for Valid Link' })
      this.brokenLink = page.getByText('Click Here for Broken Link', { exact: true });
   }
   async goto() {
    await this.page.goto(this.url);
  }

  async validImgCheck() {
    await expect(this.validImg).toBeVisible();
    const naturalWidth = await this.validImg.evaluate((el) => el.naturalWidth);
    expect(naturalWidth).toBeGreaterThan(0);
  }

  async brokenImgCheck() {
    const { complete, naturalWidth } = await this.brokenImg.evaluate(el => ({ complete: el.complete, naturalWidth: el.naturalWidth }));
    expect(complete === false || naturalWidth === 0 || naturalWidth === undefined).toBeTruthy();
  }

  async vlaidLinkCheck() {
    await this.validLink.click()
    const title = await this.page.title();
    expect(title).toContain('DEMOQA');
   }
   async brokenLinkCheck() {
    const urlPart = '/500';
    const [response] = await Promise.all([
      this.page.waitForResponse(resp => resp.status() === 500 && (urlPart ? resp.url().includes(urlPart) : true), { timeout: 10000 }),
      this.brokenLink.click()
    ]);
    expect(response).toBeTruthy();
    expect(response.status()).toBe(500);
   }
}