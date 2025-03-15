import { test, expect } from '@playwright/test';
import { countryBotton, genderBotton, signIn } from '../myTestCaseLocators/usernameLocator';
import { RegistrationFormExampleMy } from '../myTestCaseLocators/usernameLocator';
import { RegistrationFormExampleEmptyData } from '../myTestCaseLocators/usernameLocator';

interface RegistrForm extends RegistrationFormExampleMy {
    testCaseNumber: number;
}
interface RegForm extends RegistrationFormExampleEmptyData {

}


test('001/validate with posetive data', async ({ page }) => {
    const signToPage = new signIn(page);

    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'XXX',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click(); //Click on “terms and conditions”,
    await signToPage.registerBotton.click();//Press on “register” button.
    await expect(signToPage.verifyInformationMesaage).toHaveText('Verify Your Information');
    await expect(signToPage.backToFormBotton).toHaveText('Back to Form');//Verify your information page with “Back to form” button. 
});

test('002/registration Form/username field Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex@',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'XXX',
        age: '20'

    });

    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    expect(signToPage.username).toHaveCSS('border-color', 'rgb(255, 0, 0)');

});

test('003/Registration Form/password field Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'aaa',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'XXX',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    expect(signToPage.password).toHaveCSS('border-color', 'rgb(255, 0, 0)');

});

test('004/Registration Form/email field Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko',
        firstName: 'Alex',
        lastName: 'XXX',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    expect(signToPage.email).toHaveCSS('border-color', 'rgb(255, 0, 0)');
});



test('005/Registration Form/first name field Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'A',
        lastName: 'XXX',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    expect(signToPage.firstName).toHaveCSS('border-color', 'rgb(255, 0, 0)');

});


test('006/Registration Form/last name field Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: '111',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    await expect(signToPage.lastName).toHaveCSS('border-color', 'rgb(255, 0, 0)');

});




test('007/Registration Form/age field/ Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'Alex',
        age: '17'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    expect(signToPage.age).toHaveCSS('border-color', 'rgb(255, 0, 0)');

});

test('008/Registration Form/Country field not chosen/Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'Alex',
        age: '20'

    });
    await signToPage.country.selectOption('Select Country');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    await expect(signToPage.country).toHaveCSS('border-color', 'rgb(255, 0, 0)');
});




test('009/Registration Form/Gender not chosen/Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'Alex',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();
    await signToPage.gender.uncheck();
    await expect(signToPage.registerBotton).toBeVisible();

});




test('010/Registration Form/terms and conditions not chosen/Negative test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'Alex',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.registerBotton.click();
    await signToPage.termsAndConditions.uncheck();
    await expect(signToPage.registerBotton).toBeVisible();

});



test('011/Registration Form/password validation/Positive test', async ({ page }) => {
    const signToPage = new signIn(page);
    await signToPage.pageGo();
    await signToPage.fillInput({
        username: 'Alex',
        password: 'Abcaaa123@@@@@@@',
        kirpich: 'irinafedjko@gmail.com',
        firstName: 'Alex',
        lastName: 'Alex',
        age: '20'

    });
    await signToPage.country.selectOption('us');
    await signToPage.gender.click();
    await signToPage.termsAndConditions.click();
    await signToPage.registerBotton.click();//Press on “register” button.
    await expect(signToPage.verifyInformationMesaage).toHaveText('Verify Your Information');
    await expect(signToPage.backToFormBotton).toHaveText('Back to Form');

});


//parametirization 
const inputFormArray: RegistrForm[] = [
    {
        testCaseNumber: 1,
        username: "Anna",
        password: "GHaaaH566@",
        email: "ankjh@gmail.com",
        firstName: "kja",
        lastName: "Adgfdgf",
        age: "50",
        countrySelector: countryBotton.country3,
        genderSelector: genderBotton.gender3
    },
    {
        testCaseNumber: 2,
        username: "hjkkjjk",
        password: "Aaaa1ffg@",
        email: "ahklja@gmail.com",
        firstName: "khk",
        lastName: "Adf",
        age: "20",
        countrySelector: countryBotton.country2,
        genderSelector: genderBotton.gender2

    },
    {
        testCaseNumber: 3,
        username: "Alex",
        password: "Aaaa1ffg1@",
        email: "ahklja@gmai.com",
        firstName: "sadasd",
        lastName: "Addd",
        age: "20",
        countrySelector: countryBotton.country4,
        genderSelector: genderBotton.gender1

    }
];

test.describe("Login form testing", () => {
    for (const inputForm of inputFormArray) {
        test(`Test registration with different users/Posetive data: ${inputForm.username}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillForm(inputForm);
            await expect(signToPage.verifyInformationMesaage).toHaveText('Verify Your Information');
            await expect(signToPage.backToFormBotton).toHaveText('Back to Form');
        });
    }
});


const inputFormArray1: RegistrForm[] = [
    {
        testCaseNumber: 1,
        username: "A",
        password: "GHaaaH566",
        email: "ankjhgmail.com",
        firstName: "a",
        lastName: "",
        age: "250",
        countrySelector: countryBotton.country2,
        genderSelector: genderBotton.gender2

    },
    {
        testCaseNumber: 2,
        username: "",
        password: "A",
        email: "",
        firstName: "",
        lastName: "",
        age: "220",
        countrySelector: countryBotton.country4,
        genderSelector: genderBotton.gender2

    }

];
test.describe("Login form testing2", () => {
    for (const inputForm of inputFormArray1) {
        test(`Test registration with different users/Negative data for allinputs: ${inputForm.username}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillForm(inputForm);
            await expect(signToPage.username).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.password).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.email).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.firstName).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.lastName).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.age).toHaveCSS('border-color', 'rgb(255, 0, 0)');

        });
    }
});



const inputFormArray2: RegistrForm[] = [
    {
        testCaseNumber: 1,
        username: "Aasd",
        password: "GHaaaH56@",
        email: "ankjhgmail.com",
        firstName: "akljj",
        lastName: "STSr",
        age: "50",
        countrySelector: countryBotton.country3,
        genderSelector: genderBotton.gender3

    },
    {
        testCaseNumber: 2,
        username: "lkshdk",
        password: "AAAgmailcom1@",
        email: "lkl@gmail",
        firstName: "Ffhgfd",
        lastName: "Agffd",
        age: "20",
        countrySelector: countryBotton.country1,
        genderSelector: genderBotton.gender2

    }

];
test.describe("Login form testing3", () => {
    for (const inputForm of inputFormArray2) {
        test(`Test registration with different users/email negative data: ${inputForm.username}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillForm(inputForm);
            await expect(signToPage.email).toHaveCSS('border-color', 'rgb(255, 0, 0)');

        });
    }
});

const inputFormArray3: RegistrForm[] = [
    {
        testCaseNumber: 1,
        username: "A",
        password: "GHaaaH566@",
        email: "ankjh@gmail.com",
        firstName: "axsas",
        lastName: "asxasx",
        age: "10",
        genderSelector: genderBotton.gender1,
        countrySelector: countryBotton.country2
    },
    {
        testCaseNumber: 2,
        username: "",
        password: "Aasxcsas@11",
        email: "fjjf@gmail.com",
        firstName: "dsdqdq",
        lastName: "sdwqdxqw",
        age: "120",
        genderSelector: genderBotton.gender2,
        countrySelector: countryBotton.country1
    }

];
test.describe("Login form testing4", () => {
    for (const inputForm of inputFormArray3) {
        test(`Test registration with different users/Negative data for username: ${inputForm.username}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillForm(inputForm);
            await expect(signToPage.username).toHaveCSS('border-color', 'rgb(255, 0, 0)');

        });
    }
});



const inputFormArray4: RegForm[] = [
    {
        username: "Alex",
        password: "AAaaa11@",
        email: "irina@gmail.com",
        firstName: "jkhkj",
        lastName: "lkhkjhj",
        age: "79"

    }
];

test.describe("Login form testing5", () => {
    for (const inputForm of inputFormArray4) {
        test(`Test registration/not choosing country and terms and conditions: ${inputForm.username}`, async ({ page }) => {
            const signToPage = new signIn(page);
            await signToPage.pageGo();
            await signToPage.fillFormEmptyData(inputForm);
            await expect(signToPage.country).toHaveCSS('border-color', 'rgb(255, 0, 0)');
            await expect(signToPage.registerBotton).toBeVisible();

        });
    }
});
