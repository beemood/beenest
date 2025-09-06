import { createBooleanSchema, z } from '@beenest/zod';

export const selectCategoryFieldsSchema = z
  .object({
    select: createBooleanSchema(['id', ' name']),
    omit: createBooleanSchema(['id', ' name']),
  })
  .partial();

export type SelectCategoryFields = z.infer<typeof selectCategoryFieldsSchema>;
