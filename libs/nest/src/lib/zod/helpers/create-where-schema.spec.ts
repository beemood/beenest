import { fail } from 'assert';
import z from 'zod';
import { createWhereSchema } from './create-where-schema.js';

describe('createWhereSchema', () => {
  it('should create where schema from ZodType', () => {
    const whereSchema = createWhereSchema({ id: z.int() });
    const parsed = whereSchema.parse({
      id: {
        equals: '1',
        gt: 1,
        lt: 1,
      },
      name: {},
    });

    if (!parsed) fail();

    expect(parsed).toHaveProperty('id');
    expect(parsed).not.toHaveProperty('name');

    expect(parsed.id).toBeTypeOf('object');
    expect(parsed.id).toHaveProperty('equals');
    expect(parsed.id).toHaveProperty('lt');
    expect(parsed.id).toHaveProperty('gt');

    const idObject = parsed.id as any;

    expect(idObject.equals).toEqual(1);
    expect(idObject.lt).toEqual(1);
    expect(idObject.gt).toEqual(1);
  });
});
