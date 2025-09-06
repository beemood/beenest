import * as z from 'zod';

export const nameSchema = z
  .string()
  .min(3, { error: 'must be at least 2 characters long' })
  .max(30, { error: 'must not exceed 33 characters' })
  .register(z.globalRegistry, {
    id: 'name',
    title: 'Name',
    description: 'Name',
    examples: ['Some name'],
  });
