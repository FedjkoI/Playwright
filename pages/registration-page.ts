import { Locator, Page } from "@playwright/test";

export type RegistrationFormExample = {
    username: string;
    password: string;
    comments: string;
    radioSelector: RadioBoxSelector;
}

export enum RadioBoxSelector {
    radio1 = "rd1",
    radio2 = "rd2",
    radio3 = "rd3"
}

export class RegistrationPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly commentsTextArea: Locator;
    readonly radioCheck: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator("input[name='username']");
        this.passwordInput = page.locator("input[name='password']");
        this.commentsTextArea = page.locator("textarea[name='comments']");
        this.radioCheck = page.locator("input[name='radioval']");
        this.submitButton = page.locator("input[type='submit']");
    }

    async selectRadioBox(radioSelector: RadioBoxSelector) {
        await this.page.locator(`input[name='radioval'][value='${radioSelector}']`).check();
    }

    async fillForm(inputForm: RegistrationFormExample) {
        await this.usernameInput.fill(inputForm.username);
        await this.passwordInput.fill(inputForm.password);
        await this.commentsTextArea.fill(inputForm.comments);
        await this.selectRadioBox(inputForm.radioSelector);

        await this.submitButton.click();
    }
}
