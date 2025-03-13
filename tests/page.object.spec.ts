import { test, expect } from '@playwright/test';
import { KeyPresses } from '../pages/key-presses';
import { Hovers } from '../pages/hovers';
import { Dropdown } from '../pages/dropdown';
import { CheckBox } from '../pages/signIn';
import { Authentication, RegistrationFormEx } from '../pages/authentication';
import { ContexMenu } from '../pages/conteXMenu';
import { addRemove } from '../pages/addRemove';



interface Reg extends RegistrationFormEx {
    testCaseNumber: number;
}

//task 2 done / done with locators
test('checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const checkbox = new CheckBox(page);
    await checkbox.checkBox.click()
    await checkbox.clickToOne.click();
    await checkbox.clickToTwo.click();
    await expect(checkbox.clickToTwo).not.toBeChecked();
});

//task 3 done / with locators
test('dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const dropDownMenu = new Dropdown(page);
    await dropDownMenu.dropDown.click()
    const text = await dropDownMenu.dropDownOptions.allTextContents();
    expect(text).toContain('Option 1');
    expect(text).toContain('Option 2');
    await dropDownMenu.selectDropDown.selectOption('2');
    await expect(dropDownMenu.dropDownOption2).toContainText('Option 2');

});
//task 4 done/done with locators
test('key pressed', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const keyPresses = new KeyPresses(page);
    await keyPresses.keyPassLink.click();
    await keyPresses.inputField.fill("Hello world");
    await expect(keyPresses.inputField).toHaveValue('Hello world');
    await keyPresses.inputField.press('Enter');
    await expect(keyPresses.inputField).toHaveValue('');
});

//task 5 done/ done with locators
test('hovers', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const hoverOver = new Hovers(page);
    await hoverOver.hoverPage.click();
    await hoverOver.toHoverOver.hover();
    await expect(hoverOver.hoverOverNextElement).toBeVisible();
    await expect(hoverOver.hoverOverSecondElement).not.toBeVisible();
    await expect(hoverOver.hoverOverThirdElement).not.toBeVisible();
});


//test 6 /done with locator
//PARAMETIR
const inputArrayUsernamePassword: Reg[] = [
    {
        testCaseNumber: 1,
        username: "John Doe",
        password: "password"
    },
    {
        testCaseNumber: 2,
        username: "Anna",
        password: "11111222"
    },
    {
        testCaseNumber: 3,
        username: "Alex",
        password: "zaksu09ujkljlkjkljlkj89"
    },
]
inputArrayUsernamePassword.forEach((inputForm) => {
    test.describe("Login form testing", () => {
        test(`Test Case ${inputForm.testCaseNumber}`, async ({ page }) => {
            await page.goto('https://the-internet.herokuapp.com/');
            const aut = new Authentication(page);
            await aut.authenticationLink.click();
            const registrationPage = new Authentication(page);
            await registrationPage.fillForm(inputForm);
            await aut.loginBotton.click();
            await expect(aut.secureAreaMessage).toContainText('Your username is invalid!');
        })
    });
});

// test('authentication', async ({ page }) => {
//     await aut.username.fill("tomsmith");
//     await aut.password.fill('SuperSecretPassword!');
//     const message = await aut.secureAreaMessage.innerText();
//     expect(message).toContain('You logged into a secure area!');
//     expect(page.url()).toContain('/secure');
// });

//test 7/done with locators
test('authentication1', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const aut = new Authentication(page);
    await aut.authenticationLink.click();
    await aut.password.fill('SuperSecretPassword!');
    await aut.loginBotton.click();
    await expect(aut.secureAreaMessage).toContainText('Your username is invalid!');
});

// test 8//done with locators
test('authentication2', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const aut = new Authentication(page);
    await aut.authenticationLink.click();
    await aut.username.fill('tomsmith');
    await aut.loginBotton.click();
    await expect(aut.secureAreaMessage).toContainText('Your password is invalid!');

});

//test 9 / done/done with locators
test('Contex menu', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const contex = new ContexMenu(page);
    await contex.contexMenuLink.click();
    page.on('dialog', async (dialog) => {
        expect(dialog.message()).toBe('You selected a context menu');
        await dialog.accept();
    });
    await contex.rightClick.click({ button: 'right' });
    await page.keyboard.press('Enter');
    await expect(contex.popUpVisiability).not.toBeVisible();
});


//test 1 /done /done with locators
test('add, remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const addRem = new addRemove(page);
    await addRem.addRemoveLink.click();// go to: add/remove elements
    await addRem.addButton.dblclick();// double click on "add button" element
    const deleteButtons1 = addRem.deleteBotton;
    await expect(deleteButtons1).toHaveCount(2);
    await addRem.addedDeleteBotton.first().click();
    await addRem.addedDeleteBotton.first().click();//verify, that 2 delete buttons are present
    await expect(deleteButtons1).toHaveCount(0);
    const number: number = 7;
    await addRem.addButton.click({ clickCount: number });// click on button 7 times using "clickCount: n"
    const deleteButtons = addRem.presenceofDeleteBottons;// verify, that 7 delete buttons are present
    await expect(deleteButtons).toHaveCount(number);
    const deleteButtonLocator = addRem.addedDeleteBotton;// Click the first delete button 7 times
    for (let i = 0; i < number; i++) {
        await deleteButtonLocator.first().click();
    }
});






