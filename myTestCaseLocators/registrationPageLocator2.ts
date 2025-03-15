import { Locator, Page } from "@playwright/test";

//1
export type FormExample = {
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    age: string,
    phoneNumber: string,
    countrySelector: countryBotton,
    genderSelector: genderBotton,
    bio: string
}

//2
export type RegisterFormNegativeDataExample = {
    username: string,
    password: string,
    email: string,
    firstName: string,
    lastName: string,
    age: string,
    phoneNumber: string,
    bio: string

}


export enum genderBotton {
    gender1 = "male",
    gender2 = "female",
    gender3 = "other"
}

export enum countryBotton {
    country1 = "us",
    country2 = "uk",
    country3 = "ca",
    country4 = "au"
}

export class signIn {
    readonly page: Page;

    username: Locator;
    password: Locator;
    email: Locator;
    firstName: Locator;
    lastName: Locator;
    age: Locator;
    phoneNumber: Locator;
    country: Locator;
    gender: Locator;
    bio: Locator;
    subscribeLetter: Locator;
    receiveMarketingUpdates: Locator;
    participateinSurvey: Locator;
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
        this.phoneNumber = page.locator('#phone');
        this.country = page.locator('#country');
        this.gender = page.locator('#registrationForm > div:nth-child(9) > label.required');
        this.bio = page.locator('#bio');
        this.subscribeLetter = page.locator('#newsletter');
        this.receiveMarketingUpdates = page.locator('#marketing');
        this.participateinSurvey = page.locator('#survey');
        this.termsAndConditions = page.locator('#terms');
        this.registerBotton = page.locator('#registerButton');
        this.verifyInformationMesaage = page.locator('//*[@id="confirmationData"]/h2');
        this.backToFormBotton = page.locator('//*[@id="confirmationScreen"]/button');
    }

    async pageGo() {
        await this.page.goto('file:///C:/Users/irina.fedjko/Downloads/Demo%20(1).html');
    }

    async countrySelectByUser(countrySelector: countryBotton) {
        await this.page.locator(`#country`).selectOption(countrySelector);
    }

    async genderSElectbyUser(genderSelector: genderBotton) {
        await this.page.locator(`#registrationForm > div:nth-child(9) > label.required [value='${genderSelector}']`).check();
    }
    //1
    async fillForm(inputForm: FormExample) {
        await this.username.fill(inputForm.username);
        await this.password.fill(inputForm.password);
        await this.email.fill(inputForm.email)
        await this.firstName.fill(inputForm.firstName);
        await this.lastName.fill(inputForm.lastName);
        await this.age.fill(inputForm.age);
        await this.phoneNumber.fill(inputForm.phoneNumber);
        await this.countrySelectByUser(inputForm.countrySelector);
        await this.genderSElectbyUser(inputForm.genderSelector);
        await this.bio.fill(inputForm.bio);
        await this.subscribeLetter.click();
        await this.receiveMarketingUpdates.click();
        await this.participateinSurvey.click();
        await this.termsAndConditions.click();
        await this.registerBotton.click();
    }
    // //2
        async fillFormNegativeAllData(inputForm: RegisterFormNegativeDataExample) {
            await this.username.fill(inputForm.username);
            await this.password.fill(inputForm.password);
            await this.email.fill(inputForm.email)
            await this.firstName.fill(inputForm.firstName);
            await this.lastName.fill(inputForm.lastName);
            await this.age.fill(inputForm.age);
            await this.bio.fill(inputForm.bio);
            await this.phoneNumber.fill(inputForm.phoneNumber);
            await this.registerBotton.click()

        }
}




