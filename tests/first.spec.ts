import { test, expect } from '@playwright/test';

// test.skip('Playwright title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');
//     await expect(page).toHaveTitle(/Playwright/);
// });

test('press on search and enter mouse click', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator(".DocSearch-Search-Icon").click();//click on search  
    // await page.locator(".DocSearch-Input").click();//click on search 
    // await page.fill('.DocSearch-Input', "Mouse click");
    await page.locator(".DocSearch-Input").fill("Mouse click");//enter "mouse click" oin search
    await page.locator('a[href="/docs/input#mouse-click"]').click();//click on "Mouse click"
    await expect(page.locator('.anchor.anchorWithStickyNavbar_LWe7#mouse-click')).toBeVisible();//validate Mouse click tutle on the new page
    await page.locator('a[href="/docs/api/class-locator#locator-press"]').click();
});
//this without array creating
// test('after "locator()" pressed find Deprecared and 3 elements in the array', async ({ page }) => {
//     await page.goto('https://playwright.dev/docs/api/class-locator#locator-press');
//     await expect(page.locator('a[href="#deprecated"].table-of-contents__link.toc-highlight')).toBeVisible();//Find deprecated 
//     await expect(page.locator('a[href="#deprecated"] ~ ul li')).toHaveText([
//         'elementHandle',
//         'elementHandles',
//         'type']);

//created variable with array
test('"locator()" was pressed, need to find Deprecared and 3 elements in the array', async ({ page }) => {
    await page.goto('https://playwright.dev/docs/api/class-locator#locator-press'); //got ot page
    await expect(page.locator('a[href="#deprecated"].table-of-contents__link.toc-highlight')).toBeVisible();// deprecated is present on this page
    const elem: string[] = ["elementHandle", "elementHandles", "type"];//created a variable that has array of existing elements on thet page
    await expect(page.locator('a[href="#deprecated"] ~ ul li')).toHaveText(elem);//this array expect to have this text element
}); //expect locator. tobevisible text "'elementHandle','elementHandles','type'"


//without creating variable
// test('create and find community array', async ({ page }) => {
//     await page.goto('https://playwright.dev/'); //got ot page
//     await expect(page.locator('//div[@class="footer__title" and text()="Community"]')).toBeVisible();// community visible
//     await expect(page.locator('//div[text()="Community"]/following-sibling::ul[1]/li')).toHaveText([
//         'Stack Overflow',
//         'Discord',
//         'Twitter',
//         'LinkedIn'
//     ]);
//     //const list: string[] = ["stackoverflow.com/questions/tagged/playwright", "aka.ms/playwright/discord", "twitter.com/playwrightweb"]; //created a variable that has array of existing elements on thet page
//     //await expect(page.locator('//div[text()="Community"]/following-sibling::ul[1]/li')).toHaveText(list);//this array expect to have this text element
// });

//created variable and array 
test('create and find community array', async ({ page }) => {
    await page.goto('https://playwright.dev/'); //got ot page
    await expect(page.locator('//div[@class="footer__title" and text()="Community"]')).toBeVisible();// community visible
    const el: string[] = ['Stack Overflow','Discord','Twitter','LinkedIn']
    await expect(page.locator('//div[text()="Community"]/following-sibling::ul[1]/li')).toHaveText(el);
});


test('choose Java from dropDownMenu and validate that in navbar become java', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await page.locator('aria-haspopup').click();
    //await page.locator('a[href="#__docusaurus_skipToContent_fallback"]').click();//click ojn java in bar
  //  await page.locator('a[href="/java/"].dropdown__link.undefined.dropdown__link--active').click(); //click on drop down menu java
});





