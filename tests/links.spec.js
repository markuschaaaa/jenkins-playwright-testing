import { test } from '@playwright/test';
import { Links } from '../pages/LinksPage.js';

test('first two links open new tab and contain expected title', async ({ page }) => {
  const links = new Links(page)
  await links.goto()
  await links.linkCheck()
})

test('проверка кодов ответов API при клике на ссылки', async ({ page }) => {
  const links = new Links(page)
  await links.goto()
  await links.apiCheck()
});
