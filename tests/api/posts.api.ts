
import type { APIRequestContext, APIResponse } from '@playwright/test';

export class PostsApi {
  constructor(private request: APIRequestContext) {}

  async getPost(id: number): Promise<APIResponse> {
    const response = await this.request.get(`/posts/${id}`);

    return response;
  }
}
