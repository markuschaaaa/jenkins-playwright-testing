import { expect } from '@playwright/test';

export class WebTablesPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://demoqa.com/webtables';
    this.editSection = [
      this.editButton = page.locator('[title="Edit"]'),
      this.firstNameInput = page.getByRole('textbox', { name: 'First Name' }),
      this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' }),
      this.emailInput = page.getByRole('textbox', { name: 'name@example.com' }),
      this.ageInput = page.getByRole('textbox', { name: 'Age' }),
      this.salaryInput = page.getByRole('textbox', { name: 'Salary' }),
      this.departmentInput = page.getByRole('textbox', { name: 'Department' })
    ]
    this.editButton = page.locator('[title="Edit"]')
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' })
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' })
    this.emailInput = page.getByRole('textbox', { name: 'name@example.com' })
    this.ageInput = page.getByRole('textbox', { name: 'Age' })
    this.salaryInput = page.getByRole('textbox', { name: 'Salary' })
    this.departmentInput = page.getByRole('textbox', { name: 'Department' })
    this.submitButton = page.getByRole('button', { name: 'Submit' })
    this.addButton = page.getByRole('button', { name: 'Add' })
    this.deleteButton = page.locator('[title="Delete"]')
    this.userBlocks = page.locator('div.rt-tr-group')

  }
  async goto() {
    await this.page.goto(this.url);
  }

  async checkUserEdit(values){
   await this.editButton.nth(1).click()
   const formInputs = [this.firstNameInput, this.lastNameInput, this.emailInput, this.ageInput, this.salaryInput, this.departmentInput]
   const count = formInputs.length
   if (values.length !== count) throw new Error('values length must equal inputs count');

   for(let i = 0; i<formInputs.length; i++){
      await formInputs[i].click()
      await formInputs[i].fill(' ')
      await formInputs[i].fill(values[i])
      const isValid = await formInputs[i].evaluate(el => el.matches('.form-control:valid'));
      expect(isValid).toBeTruthy();
   }
   await this.submitButton.click()
  }

  async checkUserAdd(values){
   await this.addButton.click()
   const formInputs = [this.firstNameInput, this.lastNameInput, this.emailInput, this.ageInput, this.salaryInput, this.departmentInput]
   const count = formInputs.length
   if (values.length !== count) throw new Error('values length must equal inputs count');

   for(let i = 0; i<formInputs.length; i++){
      await formInputs[i].click()
      await formInputs[i].fill(' ')
      await formInputs[i].fill(values[i])
      const isValid = await formInputs[i].evaluate(el => el.matches('.form-control:valid'));
      expect(isValid).toBeTruthy();
   }
   await this.submitButton.click()
  }
   async checkUserDelete(){
      const count = await this.userBlocks.count()
      for(let i = 0; i>count; i++){
         const userBlock = this.userBlocks.nth[i]
         expect(userBlock.locator('span[title="Delete"]')).toBeTruthy();
         await this.deleteButton.click()
      }
  }
}

