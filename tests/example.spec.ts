import { test } from '@playwright/test';
import { RegistrationFormExample, RadioBoxSelector, RegistrationPage} from '../pages/registration-page';

interface TestRegistrationForm extends RegistrationFormExample {
    testCaseNumber: number;
    testCaseName: string
}

const inputFormArray: TestRegistrationForm[] = [
    {
        testCaseNumber: 1,
        testCaseName: "Test Case 1",
        username: "John Doe",
        password: "password",
        comments: "This is a test comment",
        radioSelector: RadioBoxSelector.radio1
    },
    {
        testCaseNumber: 2,
        testCaseName: "Test Case 2",
        username: "Anna",
        password: "kjhlkhlkj",
        comments: "Anna hello",
        radioSelector: RadioBoxSelector.radio2
    },

]

inputFormArray.forEach((inputForm) => {
    test.describe("Login form testing", () => {
        test(`Test Case ${inputForm.testCaseNumber}: ${inputForm.testCaseName}`, async ({ page }) => {
            await page.goto('https://testpages.herokuapp.com/styled/basic-html-form-test.html');

            const registrationPage = new RegistrationPage(page);

            await registrationPage.fillForm(inputForm);

        })
    });
});
