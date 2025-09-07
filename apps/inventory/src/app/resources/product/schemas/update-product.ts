import { type z } from '@beenest/zod';
import { createProductSchema } from './create-product.js';

export const updateProductSchema = createProductSchema.partial();

export type UpdateProduct = z.infer<typeof updateProductSchema>;
