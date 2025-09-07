import { type z } from '@beenest/zod';
import { productSchema } from './product.js';

export const createProductSchema = productSchema
  .pick({
    name: true,
    upc: true,
    description: true,
    categoryId: true,
  })
  .partial()
  .required({
    name: true,
    upc: true,
  });

export type CreateProduct = z.infer<typeof createProductSchema>;
