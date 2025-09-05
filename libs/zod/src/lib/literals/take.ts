import z from 'zod';
import { positiveIntegerSchema } from './positive-integer.js';

export const takeSchema = positiveIntegerSchema
  .clone()
  .register(z.globalRegistry, {
    id: 'take',
    description: 'Limit query result to a number of items',
    title: 'Take',
  });
