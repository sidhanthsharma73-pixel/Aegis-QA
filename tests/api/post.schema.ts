import { z } from 'zod';

export const postSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string().min(1),
  body: z.string(),
}).strict();

export type Post = z.infer<typeof postSchema>;
