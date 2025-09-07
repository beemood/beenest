import z from 'zod';
import { positiveIntegerSchema } from './positive-integer.js';

export const skipSchema = positiveIntegerSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'skip',
    description: 'Skip the number of items from result',
    title: 'Skip',
  })
  .default(0);
