import { Locator, Page } from "@playwright/test";


export class CheckBox {
    readonly page: Page;

    clickToOne: Locator;
    clickToTwo: Locator;
    checkBox: Locator;
    constructor(page: Page) {
        this.page = page;
        this.clickToOne = page.locator('(//input[@type="checkbox"])[1]');
        this.clickToTwo = page.locator('(//input[@type="checkbox"])[2]');
        this.checkBox = page.locator('a[href="/checkboxes"]');
    
    }
}