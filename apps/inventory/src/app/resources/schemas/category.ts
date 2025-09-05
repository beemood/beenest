import { nameSchema, positiveIntegerSchema, z } from '@beenest/zod';

export const CategorySchema = z.object({
  id: positiveIntegerSchema(),
  name: nameSchema(),
});
