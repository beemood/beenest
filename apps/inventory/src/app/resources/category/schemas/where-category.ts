import { createWhereSchema, z } from '@beenest/zod';
import { categoryObject } from './category.js';

export const whereCategorySchema = z
  .object({
    where: createWhereSchema(categoryObject),
  })
  .partial();

export type WhereCategory = z.infer<typeof whereCategorySchema>;
