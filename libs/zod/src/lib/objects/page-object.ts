import z from 'zod';
import { skipSchema } from '../schemas/skip.js';
import { takeSchema } from '../schemas/take.js';

export const pageObjectSchema = z
  .object({
    take: takeSchema,
    skip: skipSchema,
  })
  .partial();

export type Page = z.infer<typeof pageObjectSchema>;
