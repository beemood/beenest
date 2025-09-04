import z from 'zod';
import { DateFilterSchema } from '../filter/date-filter.js';
import { NumberFilterSchema } from '../filter/number-filter.js';
import { StringFilterSchema } from '../filter/string-filter.js';
import { pickFilterSchema } from './pick-filter-schema.js';

describe('pickFilerSchema', () => {
  it('should pick filter schema', () => {
    expect(pickFilterSchema(z.string())).toEqual(StringFilterSchema);
    expect(pickFilterSchema(z.number())).toEqual(NumberFilterSchema);
    expect(pickFilterSchema(z.iso.datetime())).toEqual(DateFilterSchema);
    expect(pickFilterSchema(z.iso.date())).toEqual(DateFilterSchema);
  });
});
