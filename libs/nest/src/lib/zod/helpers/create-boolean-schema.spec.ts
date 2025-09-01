import { createBooleanSchema } from './create-boolean-schema.js';

describe('createBooleanRecordSchema', () => {
  const fields = ['id', 'name'];

  it.each`
    value                                      | expected
    ${undefined}                               | ${undefined}
    ${null}                                    | ${null}
    ${''}                                      | ${{}}
    ${'{}'}                                    | ${{}}
    ${'{"id":true}'}                           | ${{ id: true }}
    ${'{"id":true, "name":true}'}              | ${{ id: true, name: true }}
    ${'{"id":true, "name":true, "some":true}'} | ${{ id: true, name: true }}
    ${'{"id":true, "name":true, "some":true}'} | ${{ id: true, name: true }}
  `(
    'createBooleanRecordSchema($value) should return $expected',
    ({ value, expected }) => {
      const SelectSchema = createBooleanSchema(fields);
      expect(SelectSchema.parse(value)).toEqual(expected);
    }
  );
});
