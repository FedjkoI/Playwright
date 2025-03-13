import { test, expect } from '@playwright/test';

//task 2 done
test('checkbox', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');//go on a page
    await page.locator('a[href="/checkboxes"]').click()//go to checkboxes
    await page.locator('(//input[@type="checkbox"])[1]').click();//click on option 1
    await page.locator('(//input[@type="checkbox"])[2]').click();//unclick on option 2
    await expect(page.locator('(//input[@type="checkbox"])[1]')).toBeChecked();
    await expect(page.locator('(//input[@type="checkbox"])[2]')).not.toBeChecked();

    // Please use checkbox specific methods to check/uncheck
    // Please verify state of the checkboxes; await expect(locator).SOMETHING();
});

//task 3 done
test('dropdown', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');//go on a page
    await page.locator('a[href="/dropdown"]').click()//go to dropdown
    // Verify only Option 1 and Option 2
    //const opt: string[] = ["Please select an option", "Option 1", "Option 2"];//created a variable that has array of existing elements on thet page
    // await expect(page.locator('select#dropdown option')).toHaveText(opt);
    const text = await page.locator('select#dropdown option').allTextContents();
    expect(text).toContain('Option 1');
    expect(text).toContain('Option 2');
    await page.locator('select#dropdown').selectOption('2');//select option 2
    await expect(page.locator('#dropdown > option:nth-child(3)')).toContainText('Option 2');
    // Verify that Option 2 was selected via specific expect
});

//task 4 done
test('key pressed', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/key_presses"]').click();//Go to: Key presses
    await page.locator('#target').fill("Hello world");//Enter “Hello world!” into input field
    await expect(page.locator('#target')).toHaveValue('Hello world');
    // Please verify that string above is present in an input field
    await page.locator('#target').press('Enter');
    await expect(page.locator('#target')).toHaveValue('');// Verify that input field is empty.
});

//task 5 done
test('hovers', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/hovers"]').click(); //Go to: hovers
    await page.locator('.figure:nth-last-child(1)').hover();//Hover over user 3

    // Remove row below
    //await page.locator('.figure:nth-last-child(1)').isVisible();//Verify “name: user3” is visible 
    //await expect(page.locator('#content > div > div:nth-child(5) > div > h5')).toBeVisible();

    //need to be use some assertions as well
    // Add expect that appropriate element IS visible

    await expect(page.locator('#content > div > div:nth-child(5) > div > h5')).toBeVisible();//Verify “name: user3” is visible 
    await expect(page.locator('#content > div > div:nth-child(4) > div > h5')).not.toBeVisible();//notVisible
    await expect(page.locator('#content > div > div:nth-child(3) > div > h5')).not.toBeVisible();//notVisible
});


//test 6 / done
test('authentication', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/login"]').click();//Go to: form authentication
    await page.locator('#username').fill("tomsmith");//In username input field enter “tomsmith”
    await page.locator('#password').fill('SuperSecretPassword!'); //In password input field enter “SuperSecretPassword!”
    await page.locator('#login > button > i').click(); //Click “Login” button
    // Not needed here
    const message = await page.locator('#flash').innerText();
    expect(message).toContain('You logged into a secure area!');
    expect(page.url()).toContain('/secure');//Verify url contains “/secure” endpoint

});

//test 7
test('authentication1', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/login"]').click();//Go to: form authentication
    await page.locator('#password').fill('SuperSecretPassword!');//In password input field enter “SuperSecretPassword!”
    await page.locator('#login > button > i').click();//Click “Login” button
    await expect(page.locator('#flash')).toContainText('Your username is invalid!');//Verify “Your username is invalid!” error message appears
});

// test 8
test('authentication2', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/login"]').click();//Go to: form authentication
    await page.locator('#username').fill('tomsmith');//In username input field enter “tomsmith”
    await page.locator('#login > button > i').click();//Click “Login” button
    await expect(page.locator('#flash')).toContainText('Your password is invalid!');

});

//test 9 / done
test('Contex menu', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/context_menu"]').click();
    page.on('dialog', async (dialog) => {
        // Assert the alert text
        expect(dialog.message()).toBe('You selected a context menu');
        //this assert that dialog message matchesthe expected text
        await dialog.accept();
    });
    await page.locator('#hot-spot').click({ button: 'right' });//Right click squared box on the page
    //Verify alert box contains text “You selected a context menu”
    await page.keyboard.press('Enter');
    await expect(page.locator('//*[@id="content"]/script')).not.toBeVisible();/// Verify pop-up box is not present
});


//test 1 /done
test('add, remove elements', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await page.locator('a[href="/add_remove_elements/"]').click();// go to: add/remove elements
    await page.locator('button[onclick="addElement()"]').dblclick();// double click on "add button" element
    const deleteButtons1 = page.locator('#elements .added-manually');
    await expect(deleteButtons1).toHaveCount(2);
    await page.locator('//*[@id="elements"]/button').first().click();
    await page.locator('//*[@id="elements"]/button').first().click();//verify, that 2 delete buttons are present
    await expect(deleteButtons1).toHaveCount(0);
    //optional

    // Make constant out of 7 and call it everywhere
    const number: number = 7;
    await page.locator('button[onclick="addElement()"]').click({ clickCount: number });// click on button 7 times using "clickCount: n"
    const deleteButtons = page.locator('#elements .added-manually');// verify, that 7 delete buttons are present
    await expect(deleteButtons).toHaveCount(number);
    const deleteButtonLocator = page.locator('//*[@id="elements"]/button');// Click the first delete button 7 times
    for (let i = 0; i < number; i++) {
        await deleteButtonLocator.first().click();
    }
});



