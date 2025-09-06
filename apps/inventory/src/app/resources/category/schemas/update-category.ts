import { type z } from '@beenest/zod';
import { createCategorySchema } from './create-category.js';

export const updateCategorySchema = createCategorySchema.partial();

export type UpdateCategory = z.infer<typeof updateCategorySchema>;
