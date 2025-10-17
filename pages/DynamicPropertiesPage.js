export class DynamicProperties{
   constructor(page){
      this.page = page,
      this.url = 'https://demoqa.com/dynamic-properties'
   }
   
   async goto() {
    await this.page.goto(this.url);
  }
   async visible(){
   await this.page.waitForSelector('#colorChange', { state: 'visible', timeout: 5000 })
   }
}