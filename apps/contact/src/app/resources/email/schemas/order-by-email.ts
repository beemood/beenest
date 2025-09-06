import { createOrderBySchema, z } from '@beenest/zod';
import { emailFields } from './email.js';

export const orderByEmailSchema = z
  .object({
    orderBy: createOrderBySchema(emailFields),
  })
  .partial();

export type OrderEmail = z.infer<typeof orderByEmailSchema>;
