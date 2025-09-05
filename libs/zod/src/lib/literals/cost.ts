import * as z from 'zod';
import { positiveNumberSchema } from './positive-number.js';

export const costSchema = positiveNumberSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'cost',
    title: 'Cost',
    description: 'Cost',
    examples: [1.99, 10.99, 20.99, 99.99],
  });
