import * as s from '@beenest/zod';
import { idObjectSchema, type z } from '@beenest/zod';

export const emailObject = {
  email: s.emailSchema,
  contactId: s.idSchema,
};

export const emailFields = ['id', 'email', 'contactId'];

export const emailSchema = idObjectSchema.extend(emailObject);

export type Email = z.infer<typeof emailSchema>;
