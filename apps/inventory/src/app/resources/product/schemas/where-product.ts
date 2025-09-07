import { createWhereSchema, z } from '@beenest/zod';
import { productObject } from './product.js';

export const whereProductSchema = z
  .object({ where: createWhereSchema(productObject) })
  .partial();

export type WhereProduct = z.infer<typeof whereProductSchema>;
