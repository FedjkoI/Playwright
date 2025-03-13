import { Locator, Page } from "@playwright/test";


export type RegistrationFormExampleMy = {
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    age: string,
    genderSelector: genderBotton;

}


export enum genderBotton {
    gender1 = "male",
    gender2 = "female",
    gender3 = "other"
}

export class signIn {
    readonly page: Page;

    username: Locator;
    password: Locator;
    email: Locator;
    firstName: Locator;
    lastName: Locator;
    age: Locator;
    country: Locator;
    gender: Locator;
    termsAndConditions: Locator;
    registerBotton: Locator;
    verifyInformationMesaage: Locator;
    backToFormBotton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('#username');
        this.password = page.locator('#password');
        this.email = page.locator('#email');
        this.firstName = page.locator('#firstName');
        this.lastName = page.locator('#lastName');
        this.age = page.locator('#age');
        this.country = page.locator('#country');
        this.gender = page.locator('#male');
        this.termsAndConditions = page.locator('#terms');
        this.registerBotton = page.locator('#registerButton');
        this.verifyInformationMesaage = page.locator('//*[@id="confirmationData"]/h2');
        this.backToFormBotton = page.locator('//*[@id="confirmationScreen"]/button');
    }

    async pageGo() {
        await this.page.goto('file:///C:/Users/irina.fedjko/Downloads/Demo%20(1).html');
    }


    async fillInput(field:
        {
            username: string, password: string, kirpich: string, firstName: string, lastName: string,
            age: string
        }) {
        await this.username.fill(field.username);
        await this.password.fill(field.password);
        await this.email.fill(field.kirpich);
        await this.firstName.fill(field.firstName);
        await this.lastName.fill(field.lastName);
        await this.age.fill(field.age);

    }



 async genderSElectbyUser(genderSelector: genderBotton) {
        await this.page.locator(`#male`).check();
    }

    async fillForm(inputForm: RegistrationFormExampleMy) {
        await this.username.fill(inputForm.username);
        await this.password.fill(inputForm.password);
        await this.email.fill(inputForm.email)
        await this.firstName.fill(inputForm.firstName);
        await this.lastName.fill(inputForm.lastName);
        await this.age.fill(inputForm.age);
        await this.genderSElectbyUser(inputForm.genderSelector);

    }
}