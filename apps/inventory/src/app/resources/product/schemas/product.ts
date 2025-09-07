import {
  descriptionSchema,
  idObjectSchema,
  idSchema,
  nameSchema,
  upcSchema,
  type z,
} from '@beenest/zod';

export const productObject = {
  name: nameSchema,
  description: descriptionSchema,
  upc: upcSchema,
  categoryId: idSchema,
};

export const productFields = ['id', 'name', 'upc', 'description', 'categoryId'];

export const productSchema = idObjectSchema.extend(productObject);

export type Product = z.infer<typeof productSchema>;
