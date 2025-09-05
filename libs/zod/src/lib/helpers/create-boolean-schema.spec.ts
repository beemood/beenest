import { EmptyArrayError, EmptyStringError } from '@beenest/utils';
import { createBooleanSchema } from './create-boolean-schema.js';

describe('createBooleanRecordSchema', () => {
  describe('initialize', () => {
    describe('returns', () => {
      it.each`
        fields
        ${['id']}
        ${['id', 'name']}
      `(`createBooleanSchema($fields) should create schema`, ({ fields }) => {
        expect(createBooleanSchema(fields)).toBeDefined();
      });
    });

    describe('throws', () => {
      it.each`
        fields             | error
        ${[]}              | ${EmptyArrayError}
        ${['']}            | ${EmptyStringError}
        ${['  ']}          | ${EmptyStringError}
        ${['some', '']}    | ${EmptyStringError}
        ${['some', '   ']} | ${EmptyStringError}
      `(
        `createBooleanSchema($fields) should throw $error`,
        ({ fields, error }) => {
          expect(() => createBooleanSchema(fields)).toThrow(error);
        }
      );
    });
  });

  describe('parse', () => {
    const schema = createBooleanSchema(['id', 'name']);

    describe('return', () => {
      it.each`
        input                 | output
        ${'{}'}               | ${{}}
        ${'{}'}               | ${{}}
        ${'{ "id": true }'}   | ${{ id: true }}
        ${'{ "name": true }'} | ${{ name: true }}
      `('schema.parse($input) should return $output', ({ input, output }) => {
        schema.parse(input);
      });
    });
  });
});
