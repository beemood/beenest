import { parseJsonOrReturn, toNullFunction } from '@beenest/utils';
import z, { preprocess, ZodType } from 'zod';
import { BooleanFilter } from '../prisma-filters/boolean-filter.js';
import { DateTimeFilter } from '../prisma-filters/date-time-filter.js';
import { IntegerFilter } from '../prisma-filters/integer-filter.js';
import { NumberFilter } from '../prisma-filters/number-filter.js';
import { StringFilter } from '../prisma-filters/string-filter.js';
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
