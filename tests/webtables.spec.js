import { test } from '@playwright/test';
import { WebTablesPage } from '../pages/WebTablesPage.js';

// test('check row quantity', async ({ page }) => {
//   const webTablesPage = new WebTablesPage(page);
//    await webTablesPage.goto();

// });
const users = ['Mark','Chumakov','test@mail.ru','14','5000','ins']
test('check user edition', async ({ page }) => {
  const webTablesPage = new WebTablesPage(page);
  await webTablesPage.goto();
  await webTablesPage.checkUserEdit(users)
});

test('check user delete', async ({ page }) => {
  const webTablesPage = new WebTablesPage(page);
   await webTablesPage.goto();
   await webTablesPage.checkUserDelete() 
});

test('check user add', async ({ page }) => {
  const webTablesPage = new WebTablesPage(page);
  await webTablesPage.goto();
  await webTablesPage.checkUserAdd(users)
});

// test('check user search', async ({ page }) => {
//   const webTablesPage = new WebTablesPage(page);

//   await webTablesPage.goto();

// });
