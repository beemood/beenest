import { validateUpc } from '@beenest/utils';
import * as z from 'zod';

export const upcSchema = z
  .string()
  .length(12)
  .refine(validateUpc)
  .register(z.globalRegistry, {
    id: 'upc',
    title: 'Unique product code',
    description: 'Unique product code',
    examples: [
      '1922849113576',
      '4331240671900',
      '5446138935237',
      '8325842568078',
      '8086603966082',
    ],
  });
