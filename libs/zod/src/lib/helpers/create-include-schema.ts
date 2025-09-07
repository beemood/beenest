import { parseJsonOrReturn } from '@beenest/utils';
import z, { type ZodType } from 'zod';

export function createIncludeSchema(object: Record<string, ZodType>) {
  return z.preprocess(parseJsonOrReturn, z.object(object).partial());
}
