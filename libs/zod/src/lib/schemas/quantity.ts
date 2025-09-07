import * as z from 'zod';
import { positiveIntegerSchema } from './positive-integer.js';

export const quantitySchema = positiveIntegerSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'quantity',
    title: 'Quantity',
    description: 'Quantity',
    examples: [1, 10, 20, 100],
  });
