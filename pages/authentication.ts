import { Locator, Page } from "@playwright/test";


export type RegistrationFormEx={
    username: string;
    password: string;
}
export class Authentication {
    readonly page: Page;

    authenticationLink: Locator;
    username: Locator;
    password: Locator;
    loginBotton: Locator;
    secureAreaMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.authenticationLink = page.locator('a[href="/login"]');
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.loginBotton = page.locator('#login > button > i');
        this.secureAreaMessage = page.locator('#flash');
    
    }

    async fillForm(inputForm: RegistrationFormEx) {
            await this.username.fill(inputForm.username);
            await this.password.fill(inputForm.password);
            
        }
}