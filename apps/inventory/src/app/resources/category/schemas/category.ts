import { idObjectSchema, idSchema, nameSchema, z } from '@beenest/zod';

export const categoryObject = {
  id: idSchema,
  name: nameSchema,
};

export const categorySchema = idObjectSchema
  .extend({
    name: nameSchema,
  })
  .register(z.globalRegistry, {
    id: 'Category',
    title: 'Product Category',
    description: 'Product category',
  });

export type Category = z.infer<typeof categorySchema>;
