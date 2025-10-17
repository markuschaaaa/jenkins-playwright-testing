import { test } from '@playwright/test';
import { DynamicProperties } from '../pages/DynamicPropertiesPage';

test('элемент появляется на странице спустя 5 секунд', async ({ page }) => {
   const dynamicProperties = new DynamicProperties(page)
   await dynamicProperties.goto()
   await dynamicProperties.visible()
});