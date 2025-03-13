import { Locator, Page } from "@playwright/test";


export class Dropdown {
    readonly page: Page;

    dropDown: Locator;
    dropDownOptions: Locator;
    selectDropDown: Locator;
    dropDownOption2: Locator;
    constructor(page: Page) {
        this.page = page;
        this.dropDown = page.locator('a[href="/dropdown"]')
        this.dropDownOptions = page.locator('select#dropdown option');
        this.selectDropDown = page.locator('select#dropdown');
        this.dropDownOption2 = page.locator('#dropdown > option:nth-child(3)');
    
    }
}