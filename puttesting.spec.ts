import {test,expect} from '@playwright/test';

test('Put Request',async ({request}) => {
  
    const response = await request.put('https://reqres.in/api/users/2',{
        data: {
            "name": "Radhika",
            "job": "leader"
        }
    });
    expect (response.status()).toBe(200);

     console.log(await response.json());
    
    const text = await response.text();
    expect(text).toContain('Radhika');
})