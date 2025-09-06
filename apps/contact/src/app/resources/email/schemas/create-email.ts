import { type z } from '@beenest/zod';
import { emailSchema } from './email.js';

export const createEmailSchema = emailSchema
  .pick({
    email: true,
    contactId: true,
  })
  .required({
    email: true,
    contactId: true,
  });

export type CreateEmail = z.infer<typeof createEmailSchema>;
