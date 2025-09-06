import { type z } from '@beenest/zod';
import { createEmailSchema } from './create-email.js';

export const updateEmailSchema = createEmailSchema.partial();

export type UpdateEmail = z.infer<typeof updateEmailSchema>;
