import { createOrderBySchema, z } from '@beenest/zod';

export const orderByCategorySchema = z
  .object({
    orderBy: createOrderBySchema(['id', 'name']),
  })
  .partial();

export type OrderCategory = z.infer<typeof orderByCategorySchema>;
