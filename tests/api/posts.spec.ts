
import { test, expect } from '@playwright/test';
import { PostsApi } from './posts.api';

test('GET /posts/1 returns a valid post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPost(1);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(1);
  expect(typeof body.title).toBe('string');
  expect(body.title.length).toBeGreaterThan(0);
});

test('GET /posts/2 returns the correct post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPost(2);

  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.id).toBe(2);
});


test('Get /posts/9999 returns not found', async ({ request }) => {
  const postsApi = new PostsApi(request);
  const response = await postsApi.getPost(9999);

  expect(response.status()).toBe(404);

  const body = await response.json();
  expect(Object.keys(body)).toHaveLength(0);
});


test('GET /posts/0 checks the zero ID boundary', async ({ request }) => {
  const postsApi = new PostsApi(request);
  const response = await postsApi.getPost(0);

  expect(response.status()).toBe(404);

  const body = await response.json();
  expect(Object.keys(body)).toHaveLength(0);


});
