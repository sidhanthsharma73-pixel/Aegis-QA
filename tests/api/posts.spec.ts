import { postSchema } from './post.schema';
import { test, expect } from '@playwright/test';
import { PostsApi } from './posts.api';
import type { Post } from './post.schema';

test('GET /posts/1 returns a valid post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPost(1);

  expect(response.status()).toBe(200);

  const body: Post = await response.json();
  postSchema.parse(body);
  expect(body.userId).toEqual(expect.any(Number));
  expect(body.id).toBe(1);
  expect(typeof body.title).toBe('string');
  expect(body.title.length).toBeGreaterThan(0);
  expect(typeof body.body).toBe('string');
  expect(body.body.length).toBeGreaterThan(0);
});


test('GET /posts/2 returns the correct post', async ({ request }) => {
  const postsApi = new PostsApi(request);

  const response = await postsApi.getPost(2);

  expect(response.status()).toBe(200);

  const body: Post = await response.json();
  postSchema.parse(body);


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

test('GET /posts/abc handles a non-numeric ID', async ({ request }) => {
  const response = await request.get('/posts/abc');

  expect(response.status()).toBe(404);

  const body = await response.json();

  expect(Object.keys(body)).toHaveLength(0);
});

test('Post schema rejects an invalid title type', () => {
  const invalidPost = {
    userId: 1,
    id: 1,
    title: 123,
    body: 'Example content',
  };
  expect(() => postSchema.parse(invalidPost)).toThrow();
});
