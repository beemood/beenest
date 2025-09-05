import { NotSupportedError } from '@beenest/utils';
import { ZodType } from 'zod';
import { booleanFilterSchema } from '../prisma-filters/boolean-filter.js';
import { dateFilterSchema } from '../prisma-filters/date-time-filter.js';
import { integerFilterSchema } from '../prisma-filters/integer-filter.js';
import { numberFilterSchema } from '../prisma-filters/number-filter.js';
import { stringFilterSchema } from '../prisma-filters/string-filter.js';

/**
 * Pick the right filter schema for {@link zodSchema}
 *
 * @group Zod
 * @param zodSchema
 * @returns Zod filter schemas such as {@link integerFilterSchema}, {@link numberFilterSchema}, etc.
 *
 */
export function pickFilterSchema(zodSchema: ZodType) {
  switch (zodSchema.type) {
    case 'bigint':
    case 'literal':
    case 'string': {
      const format = (zodSchema.def as any)?.['format'];
      if (format == 'datetime' || format === 'date') {
        return dateFilterSchema;
      }

      return stringFilterSchema;
    }
    case 'number':
      return numberFilterSchema;
    case 'int':
      return integerFilterSchema;
    case 'boolean':
      return booleanFilterSchema;
    case 'date':
    case 'symbol':
    case 'undefined':
    case 'object':
    case 'function':
    case 'null':
    case 'void':
    case 'never':
    case 'any':
    case 'unknown':
    case 'file':
    case 'record':
    case 'array':
    case 'tuple':
    case 'union':
    case 'intersection':
    case 'map':
    case 'set':
    case 'enum':
    case 'nullable':
    case 'optional':
    case 'nonoptional':
    case 'success':
    case 'transform':
    case 'default':
    case 'prefault':
    case 'catch':
    case 'nan':
    case 'pipe':
    case 'readonly':
    case 'template_literal':
    case 'promise':
    case 'lazy':
    case 'custom':
      throw new NotSupportedError(
        `The zod type,${zodSchema.type}, is not supported by ${pickFilterSchema.name}`
      );
  }
}
