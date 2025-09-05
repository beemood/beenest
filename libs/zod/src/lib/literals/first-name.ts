import * as z from 'zod';

export const firstNameSchema = z
  .string()
  .max(100, { error: 'must be at most 100 characters long' })
  .regex(/[a-zA-Z\s]/, { error: 'must contain only letters and space' })
  .register(z.globalRegistry, {
    id: 'firstName',
    title: 'First name',
    description: 'First name',
    examples: ['Robert', 'Michael'],
  });
