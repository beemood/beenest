import { createWhereSchema, z } from '@beenest/zod';
import { emailObject } from './email.js';

export const whereEmailSchema = z
  .object({
    where: createWhereSchema(emailObject),
  })
  .partial();

export type WhereEmail = z.infer<typeof whereEmailSchema>;
