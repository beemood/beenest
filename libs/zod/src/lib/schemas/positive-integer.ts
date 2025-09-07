import * as z from 'zod';

export const positiveIntegerSchema = z.coerce
  .number()
  .int()
  .positive({ error: 'must be positive integer' })
  .register(z.globalRegistry, {
    id: 'positiveInteger',
    title: 'Positive integer',
    description: 'Positive integer',
    examples: [1, 10, 20, 100],
  });
