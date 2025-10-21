import { test } from '@playwright/test';
import { BrokenLinks } from '../pages/Elements/BrokenLinksPage';

 

  test('valid image should be loaded', async ({ page }) => {
    const brokenLinks = new BrokenLinks(page)
    await brokenLinks.goto()
    await brokenLinks.validImgCheck()
  });

  test('broken image should not be loaded (naturalWidth === 0)', async ({ page }) => {
    const brokenLinks = new BrokenLinks(page)
    await brokenLinks.goto()
    await brokenLinks.brokenImgCheck()
  });

  test('valid link should open/navigate and target page should contain expected title or url', async ({ page }) => {
    const brokenLinks = new BrokenLinks(page)
    await brokenLinks.goto()
    await brokenLinks.vlaidLinkCheck()
  });

  test('broken link should return HTTP 500', async ({ page }) => {
    const brokenLinks = new BrokenLinks(page)
    await brokenLinks.goto()
    await brokenLinks.brokenLinkCheck()
  });


