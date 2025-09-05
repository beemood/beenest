import * as z from 'zod';

export const rateSchema = z.coerce
  .number()
  .int()
  .min(1, { error: 'must be greater or equal to 1' })
  .max(5, { error: 'must be less or equal to 5' })
  .register(z.globalRegistry, {
    id: 'rate',
    title: 'Rate',
    description: 'Rate between 1 and 5',
    examples: [1, 2, 3, 4, 5],
  });
