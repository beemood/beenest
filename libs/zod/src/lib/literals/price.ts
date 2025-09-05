import * as z from 'zod';
import { positiveNumberSchema } from './positive-number.js';

export const priceSchema = positiveNumberSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'price',
    title: 'Price',
    description: 'Price',
    examples: [1.99, 10.99, 20.99, 99.99],
  });
