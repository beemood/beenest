import { createBooleanSchema, createIncludeSchema, z } from '@beenest/zod';
import { selectCategoryFieldsSchema } from '../../category/schemas/select-category-fields.js';
import { productFields } from './product.js';

export const selectProductFieldsSchema = z
  .object({
    select: createBooleanSchema(productFields),
    omit: createBooleanSchema(productFields),
    include: createIncludeSchema({ category: selectCategoryFieldsSchema }),
  })
  .partial();

export type SelectProductFields = z.infer<typeof selectProductFieldsSchema>;
