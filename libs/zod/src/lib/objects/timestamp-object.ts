import z from 'zod';
import { idSchema } from '../literals/id.js';

export const timestampObjectSchema = z.object({
  id: idSchema,
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  deletedAt: z.iso.datetime().optional(),
});


export type Timestamp = z.infer<typeof timestampObjectSchema>;
