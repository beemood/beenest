import { createOrderBySchema, z } from '@beenest/zod';
import { productFields } from './product.js';

export const orderByProductSchema = z
  .object({ orderBy: createOrderBySchema(productFields) })
  .partial();

export type OrderProduct = z.infer<typeof orderByProductSchema>;
