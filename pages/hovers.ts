import { Locator, Page } from "@playwright/test";


export class Hovers {
    readonly page: Page;


    toHoverOver: Locator;
    hoverOverNextElement: Locator;
    hoverOverSecondElement: Locator;
    hoverOverThirdElement: Locator;
    hoverPage: Locator;
    constructor(page: Page) {
        this.page = page;
        this.toHoverOver = page.locator('.figure:nth-last-child(1)');
        this.hoverOverNextElement = page.locator('#content > div > div:nth-child(5) > div > h5');
        this.hoverOverSecondElement = page.locator('#content > div > div:nth-child(4) > div > h5');
        this.hoverOverThirdElement = page.locator('#content > div > div:nth-child(3) > div > h5');
        this.hoverPage = page.locator('a[href="/hovers"]');

    }
}
