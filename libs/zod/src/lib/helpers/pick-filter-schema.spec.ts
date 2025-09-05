import z from 'zod';
import { dateFilterSchema } from '../prisma-filters/date-time-filter.js';
import { numberFilterSchema } from '../prisma-filters/number-filter.js';
import { stringFilterSchema } from '../prisma-filters/string-filter.js';
import { pickFilterSchema } from './pick-filter-schema.js';

describe('pickFilerSchema', () => {
  it('should pick filter schema', () => {
    expect(pickFilterSchema(z.string())).toEqual(stringFilterSchema);
    expect(pickFilterSchema(z.number())).toEqual(numberFilterSchema);
    expect(pickFilterSchema(z.iso.datetime())).toEqual(dateFilterSchema);
    expect(pickFilterSchema(z.iso.date())).toEqual(dateFilterSchema);
  });
});
