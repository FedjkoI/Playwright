import { Locator, Page } from "@playwright/test";


export class AddRemoveElementsPagesss {
    readonly page:Page;

    constructor(page: Page){
        this.page = page;
    }
}