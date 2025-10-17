import { expect } from '@playwright/test';

export class Links{
   constructor(page){
      this.page = page,
      this.url = 'https://demoqa.com/links'
      this.firstLink = page.getByRole('link', { name: 'Home', exact: true })
      this.cases = [
         { text: 'Created', endpoint: '/created', expectedStatus: 201 },
         { text: 'No Content', endpoint: '/no-content', expectedStatus: 204 },
         { text: 'Moved', endpoint: '/moved', expectedStatus: 301 },
         { text: 'Bad Request', endpoint: '/bad-request', expectedStatus: 400 },
         { text: 'Unauthorized', endpoint: '/unauthorized', expectedStatus: 401 },
         { text: 'Forbidden', endpoint: '/forbidden', expectedStatus: 403 },
         { text: 'Not Found', endpoint: '/invalid-url', expectedStatus: 404 },
      ];
   }

   async goto() {
    await this.page.goto(this.url);
  }

  async linkCheck() {
   const popupPromise = this.page.waitForEvent('popup');
   await this.firstLink.click();
   const popup = await popupPromise;

   await popup.waitForLoadState('domcontentloaded');
   const title = await popup.title();
   expect(title).toContain('DEMOQA');
  }

  async apiCheck(){
   for (const { text, endpoint, expectedStatus } of this.cases) {
      const [response] = await Promise.all([
         this.page.waitForResponse(resp =>
         resp.url().includes(endpoint)
         ),
         this.page.getByText(text, { exact: true }).click(),
      ]);
      expect(response.status()).toBe(expectedStatus);
   }   
  }  
}