import {test,expect} from '@playwright/test';

test('API Get request',async ({request}) => {
  
    const response = await request.get('https://reqres.in/api/users/2');
    expect (response.status()).toBe(200);

     console.log(await response.json());
    
   // const text = await response.text();
   // expect(text).toContain('Janet');
})