import { test, expect } from '@playwright/test';

test('Delete Request', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users/2', {
        data: {
            "name": "Janet",
            "job": "Weaver"
        }
    });

    expect (response.status()).toBe(200);
     console.log(await response.json());
    
})