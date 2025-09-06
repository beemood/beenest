import * as z from 'zod';

export const rateSchema = z.coerce
  .number()
  .int()
  .min(1, { error: 'must be at least 1' })
  .max(5, { error: 'must not exceed 5' })
  .register(z.globalRegistry, {
    id: 'rate',
    title: 'Rate',
    description: 'Rate between 1 and 5',
    examples: [1, 2, 3, 4, 5],
  });
