import { Locator, Page } from "@playwright/test";


export class addRemove {
    readonly page: Page;

    addRemoveLink: Locator;
    addButton: Locator;
    deleteBotton: Locator;
    addedDeleteBotton: Locator;
    presenceofDeleteBottons: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.addRemoveLink = page.locator('a[href="/add_remove_elements/"]');
        this.addButton = page.locator('button[onclick="addElement()"]');
        this.deleteBotton = page.locator('#elements .added-manually');
        this.addedDeleteBotton = page.locator('//*[@id="elements"]/button');
        this.presenceofDeleteBottons = page.locator('#elements .added-manually');
   
    }
}
    
