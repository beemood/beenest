import { createBooleanSchema, z } from '@beenest/zod';
import { emailFields } from './email.js';

export const selectEmailFieldsSchema = z
  .object({
    select: createBooleanSchema(emailFields),
    omit: createBooleanSchema(emailFields),
  })
  .partial();

export type SelectEmailFields = z.infer<typeof selectEmailFieldsSchema>;
