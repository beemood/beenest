import { idObjectSchema, nameSchema } from '@beenest/zod';

export const categorySchema = idObjectSchema.extend({
  name: nameSchema,
});
