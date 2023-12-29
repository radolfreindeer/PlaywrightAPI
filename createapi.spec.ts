import { test, expect } from '@playwright/test';

test('Create API request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users', {
        data: {
            "name": "TestingSample1",
            "job": "leader"
        }
    });

    expect (response.status()).toBe(201);
     console.log(await response.json());
    
})