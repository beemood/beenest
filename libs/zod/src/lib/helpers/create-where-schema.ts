import { parseJsonOrReturn, toNullFunction } from '@beenest/utils';
import z, { preprocess, type ZodType } from 'zod';
import { type BooleanFilter } from '../prisma-filters/boolean-filter.js';
import { type DateTimeFilter } from '../prisma-filters/date-time-filter.js';
import { type IntegerFilter } from '../prisma-filters/integer-filter.js';
import { type NumberFilter } from '../prisma-filters/number-filter.js';
import { type StringFilter } from '../prisma-filters/string-filter.js';
import { pickFilterSchema } from './pick-filter-schema.js';

export function createWhereSchema<T extends Record<string, ZodType>>(
  zodRecord: T
) {
  const entries = Object.entries(zodRecord);

  const pickFilterOrNull = toNullFunction(pickFilterSchema);

  const whereObject = entries.reduce((p, [key, value]) => {
    const filter = pickFilterOrNull(value);

    if (filter) {
      return {
        ...p,
        [key]: filter,
      };
    }
    return p;
  }, {});

  return preprocess(
    parseJsonOrReturn,
    z
      .object(
        whereObject as Record<
          string,
          | StringFilter
          | DateTimeFilter
          | NumberFilter
          | IntegerFilter
          | BooleanFilter
        >
      )
      .partial()
  );
}
