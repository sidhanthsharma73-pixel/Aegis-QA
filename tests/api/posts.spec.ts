import { test, expect } from '@playwright/test';

test('GET /posts/1 returns a valid post', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  // Verify the HTTP status.
  expect(response.status()).toBe(200);

  // Parse the JSON response body.
  const body = await response.json();

  // Validate the response data.
  expect(body.id).toBe(1);
  expect(typeof body.title).toBe('string');
  expect(body.title.length).toBeGreaterThan(0);
});

test('public endpoint should allow unauthenticated requests', async({request}) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  expect(response.status()).toBe(200)
  const body= await response.json();
  expect(body.id).toBe(1);

}) 