import { test } from '@playwright/test';
import { UploadDownload } from '../pages/Elements/UploadDownloadPage.js';


test('download file test with async/await', async ({ page }) => {
  const uploadDownload = new UploadDownload(page)
  await uploadDownload.goto();
  await uploadDownload.fileDownload()
});


test('upload file test', async ({ page }) => {
  const uploadDownload = new UploadDownload(page)
  await uploadDownload.goto();
  await uploadDownload.uploadFile()
});
