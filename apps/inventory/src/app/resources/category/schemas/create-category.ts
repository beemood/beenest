import { type z } from '@beenest/zod';
import { categorySchema } from './category.js';

export const createCategorySchema = categorySchema
  .pick({
    name: true,
  })
  .required({
    name: true,
  });

export type CreateCategory = z.infer<typeof createCategorySchema>;
