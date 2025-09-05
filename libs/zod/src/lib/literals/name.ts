import * as z from 'zod';

export const nameSchema = z
  .string()
  .min(3)
  .max(30)
  .register(z.globalRegistry, {
    id: 'name',
    title: 'Name',
    description: 'Name',
    examples: ['Some name'],
  });
