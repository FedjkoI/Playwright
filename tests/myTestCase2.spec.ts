import { test, expect } from '@playwright/test';
import { countryBotton, genderBotton, signIn } from '../myTestCaseLocators/usernameLocator';
import { FormExample } from '../myTestCaseLocators/registrationPageLocator2';
import { RegisterFormNegativeDataExample } from '../myTestCaseLocators/registrationPageLocator2';



interface RegisterForm extends FormExample {
    testCaseNumber: number;
}
interface RegFormNegativeData extends RegisterFormNegativeDataExample {
    testCaseNumber: number;
}

//1
const inputFormArray: RegisterForm[] = [
    {
        testCaseNumber: 1,
        username: "Alexxxxxxxx",
        password: "Abca123@",
        email: "irinafedjko@gmail.com",
        firstName: "acvbnm",
        lastName: "aagdjytdkydtykdydydrd",
        age: "18",
        phoneNumber: "111-222-3333",
        bio: "akjgkg giuggg vkyfuyfutfty",
        genderSelector: genderBotton.gender3,
        countrySelector: countryBotton.country4
    }
];
//1
test.describe("Login testing", () => {
    for (const inputForm of inputFormArray) {
        test(`Test registration with different users/Posetive data/Min characters: ${inputForm.testCaseNumber}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillForm(inputForm);
            await expect(signToPage.verifyInformationMesaage).toHaveText('Verify Your Information');
            await expect(signToPage.backToFormBotton).toHaveText('Back to Form');
        });
    }
});

//2
const inputFormArray1: RegFormNegativeData[] = [
    {
        testCaseNumber: 1,
        username: "A",
        password: "A123@",
        email: "irinafedjkogmail.com",
        firstName: "a",
        lastName: "a",
        age: "16", 
        phoneNumber: "111",
        bio: "a"

    }
];
//2
test.describe("Login form testing2", () => {
    for (const inputForm of inputFormArray1) {
        test(`Test registration with different users/Negative data for allinputs: ${inputForm.username}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillFormNegativeAllData(inputForm);
            await expect(signToPage.username).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.password).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.email).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.firstName).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.lastName).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.age).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.country).toHaveCSS('border-color', 'rgb(255, 0, 0)');
           

        });
    }
});


// //3
// const inputFormArray2: RegFormEmpty1[] = [
//     {
//         testCaseNumber: 1,
//         username: "A@",
//         password: "A123",
//         email: "irinafedjkogmail.com",
//         firstName: "A",
//         lastName: "A",
//         age: "0",
//         //countrySelector: countryBotton.country3,
//         //genderSelector: genderBotton.gender3

//     }

// ];
// //3
// test.describe("Login form testing3", () => {
//     for (const inputForm of inputFormArray2) {
//         test(`Test registration/negative data only for required fields: ${inputForm.username}`, async ({ page }) => {
//             const signToPage = new signIn(page);
//             await signToPage.pageGo();
//             await signToPage.fillForm(inputForm);
//             await expect(signToPage.email).toHaveCSS('border-color', 'rgb(255, 0, 0)');

//         });
//     }
// });

