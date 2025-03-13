import { Locator, Page } from "@playwright/test";


export class KeyPresses {
    readonly page: Page;

    inputField: Locator;
    keyPassLink: Locator;
    constructor(page: Page) {
        this.page = page;
        this.inputField = page.locator('#target');
        this.keyPassLink = page.locator('a[href="/key_presses"]');
    
    }
}