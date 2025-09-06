import z from 'zod';
import { skipSchema } from '../literals/skip.js';
import { takeSchema } from '../literals/take.js';

export const pageObjectSchema = z
  .object({
    take: takeSchema,
    skip: skipSchema,
  })
  .partial();

export type Page = z.infer<typeof pageObjectSchema>;
