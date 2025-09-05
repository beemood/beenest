import * as z from 'zod';

export const positiveNumberSchema = z.coerce
  .number()
  .positive({ error: 'must be positive number' })
  .register(z.globalRegistry, {
    id: 'positiveNumber',
    title: 'Positive number',
    description: 'Positive number',
    examples: [1, 10.99, 20.2, 100],
  });
