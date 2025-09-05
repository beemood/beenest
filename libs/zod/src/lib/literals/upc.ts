import { toBooleanFunction, validateUpc } from '@beenest/utils';
import * as z from 'zod';

export const upcSchema = z
  .string()
  .length(12, { error: 'must be 12 characters long' })
  .regex(/^\d{12}$/, { error: 'must be 12 digits number string' })
  .refine(toBooleanFunction(validateUpc), { error: 'Invalud upc' })
  .register(z.globalRegistry, {
    id: 'upc',
    title: 'Unique product code',
    description: 'Unique product code',
    examples: ['123456123458', '123456123458', '123456123458'],
  });
