import * as z from 'zod';

export const positiveIntegerSchema = z
  .int()
  .positive()
  .register(z.globalRegistry, {
    id: 'positiveInteger',
    title: 'Positive integer',
    description: 'Positive integer',
    examples: [1, 10, 20, 100],
  });
