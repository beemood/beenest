import z from 'zod';
import { positiveIntegerSchema } from './positive-integer.js';

export const idSchema = positiveIntegerSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'id',
    title: 'Id',
    description: 'Incremental integer id value',
    examples: [1, 2, 3, 4, 5],
  });
