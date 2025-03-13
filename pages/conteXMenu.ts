import { Locator, Page } from "@playwright/test";


export class ContexMenu {
    readonly page: Page;

    contexMenuLink: Locator;
    rightClick: Locator;
    popUpVisiability: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.contexMenuLink = page.locator('a[href="/context_menu"]');
        this.rightClick = page.locator('#hot-spot');
        this.popUpVisiability = page.locator('//*[@id="content"]/script');
        
    
    }
}