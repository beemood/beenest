import { createBooleanSchema, z } from '@beenest/zod';
import { emailFields } from './email.js';

export const selectEmailFieldsObject = {
  select: createBooleanSchema(emailFields),
  omit: createBooleanSchema(emailFields),
};

export const selectEmailFieldsSchema = z
  .object(selectEmailFieldsObject)
  .partial();

export type SelectEmailFields = z.infer<typeof selectEmailFieldsSchema>;
