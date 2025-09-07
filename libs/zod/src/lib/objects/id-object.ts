import z from 'zod';
import { idSchema } from '../schemas/id.js';

export const idObjectSchema = z.object({
  id: idSchema,
});

export type Id = z.infer<typeof idObjectSchema>;
