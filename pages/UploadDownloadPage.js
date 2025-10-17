import { expect } from '@playwright/test';
import path from 'path';

export class UploadDownload{
   constructor(page){
      this.page = page;
      this.url = 'https://demoqa.com/upload-download',
      this.downloadButton = page.getByRole('link', { name: 'Download' });
      this.expectedFileName = 'sampleFile.jpeg',
      this.uploadButton = page.getByRole('button', { name: 'Select a file' })
   }

   async goto() {
    await this.page.goto(this.url);
  }
   async fileDownload(){
      const downloadPromise = this.page.waitForEvent('download');
      await this.downloadButton.click();
      const download = await downloadPromise; 
      expect(download.suggestedFilename()).toBe(this.expectedFileName);
      const filePath = path.join(__dirname, download.suggestedFilename());
        await download.saveAs(filePath);
        const fileSize = (await download.path()) ? (await download.path()).length : 0;
       expect(fileSize).toBeGreaterThan(0);
   }
   async uploadFile() {
    const filePath = path.resolve(__dirname, this.expectedFileName); 
    await this.uploadButton.setInputFiles(filePath);
    const uploadedFileName = await this.page.locator('#uploadedFilePath').textContent();
    expect(uploadedFileName).toContain('sampleFile.jpeg');
  }
}