import { NotSupportedError } from '@beenest/utils';
import { ZodType } from 'zod';
import { BooleanFilterSchema } from '../filter/boolean-filter.js';
import { DateFilterSchema } from '../filter/date-filter.js';
import { IntegerFilterSchema } from '../filter/integer-filter.js';
import { NumberFilterSchema } from '../filter/number-filter.js';
import { StringFilterSchema } from '../filter/string-filter.js';

/**
 * Pick the right filter schema for {@link zodSchema}
 *
 * @group Zod
 * @param zodSchema
 * @returns Zod filter schemas such as {@link IntegerFilterSchema}, {@link NumberFilterSchema}, etc.
 *
 */
export function pickFilterSchema(zodSchema: ZodType) {
  switch (zodSchema.type) {
    case 'bigint':
    case 'literal':
    case 'string': {
      const format = (zodSchema.def as any)?.['format'];
      if (format == 'datetime' || format === 'date') {
        return DateFilterSchema;
      }

      return StringFilterSchema;
    }
    case 'number':
      return NumberFilterSchema;
    case 'int':
      return IntegerFilterSchema;
    case 'boolean':
      return BooleanFilterSchema;
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
