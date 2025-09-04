import { parseJsonOrReturn, toNullFunction } from '@beenest/utils';
import z, { preprocess, ZodType } from 'zod';
import { BooleanFilter } from '../filter/boolean-filter.js';
import { DateFilter } from '../filter/date-filter.js';
import { IntegerFilter } from '../filter/integer-filter.js';
import { NumberFilter } from '../filter/number-filter.js';
import { StringFilter } from '../filter/string-filter.js';
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
          | NumberFilter
          | IntegerFilter
          | BooleanFilter
          | DateFilter
        >
      )
      .partial()
      .optional()
  );
}
