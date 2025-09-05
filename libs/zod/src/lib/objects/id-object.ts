import z from 'zod';
import { idSchema } from '../literals/id.js';

export const idObjectSchema = z.object({
  id: idSchema,
});
