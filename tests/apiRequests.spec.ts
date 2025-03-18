import { test, expect } from '@playwright/test';

test('GET request', async ({ page }) => {
        const response = await page.request.get('https://jsonplaceholder.typicode.com/posts/3');
        expect(response.status()).toBe(200);
         const data = await response.json();
        expect(data).toHaveProperty('id', 3);
    });

    test('POST request', async ({ page }) => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const data = {
          title: 'a',
          body: 'b',
          userId: 1
        };
        const response = await page.request.post(url, {
          data: data,
        });
        expect(response.status()).toBe(201);//status created
        const responseData = await response.json();
        expect(responseData).toHaveProperty('title', 'a');
        expect(responseData).toHaveProperty('body', 'b');
        expect(responseData).toHaveProperty('userId', 1);
      });

      test('Send DELETE request example', async ({ page }) => {
        const url = 'https://jsonplaceholder.typicode.com/posts/101'; 
        const response = await page.request.delete(url);
        expect(response.status()).toBe(200); 
        const responseBody = await response.json();
        console.log(responseBody);
      });


      test('GET request1', async ({ page }) => {
        const response = await page.request.get('https://jsonplaceholder.typicode.com/posts/101'); //user not exist
        expect(response.status()).toBe(404);
    });