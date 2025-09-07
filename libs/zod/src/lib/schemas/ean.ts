import { toBooleanFunction, validateEan } from '@beenest/utils';
import * as z from 'zod';

export const eanSchema = z
  .string()
  .length(13, { error: 'must be 13 characters long' })
  .regex(/^\d{13}$/, { error: 'must be 13 digits number string' })
  .refine(toBooleanFunction(validateEan), { error: 'Invalid ean' })
  .register(z.globalRegistry, {
    id: 'ean',
    title: 'Ean',
    description: 'European Article Number',
    examples: [
      '1922849113576',
      '4331240671900',
      '5446138935237',
      '8325842568078',
      '8086603966082',
    ],
  });
