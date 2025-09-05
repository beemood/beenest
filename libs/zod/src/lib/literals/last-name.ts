import * as z from 'zod';

export const lastName = z
  .string()
  .max(100, { error: 'must be at most 100 characters long' })
  .regex(/[a-zA-Z\s]/, { error: 'must contain only letters and space' })
  .register(z.globalRegistry, {
    id: 'lastName',
    title: 'Last name',
    description: 'Last name',
    examples: ['Brightline', 'King', 'Hunter'],
  });
