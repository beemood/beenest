import {
  barcodeSchema,
  descriptionSchema,
  nameSchema,
  stringSchema,
} from './literals.js';

describe('StringLiteralSchemas', () => {
  describe('stringSchema', () => {
    describe('returns', () => {
      it.each`
        value     | returnValue
        ${''}     | ${''}
        ${'some'} | ${'some'}
      `(
        `stringSchema().parse($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(stringSchema().parse(value)).toEqual(returnValue);
        }
      );
    });
  });

  describe('nameSchema', () => {
    describe('returns', () => {
      it.each`
        value             | returnValue
        ${'ab'}           | ${'ab'}
        ${'ab      some'} | ${'ab some'}
        ${'a'.repeat(30)} | ${'a'.repeat(30)}
      `(
        `nameSchema().parse($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(nameSchema().parse(value)).toEqual(returnValue);
        }
      );
    });

    describe('throws', () => {
      it.each`
        value                   | errorMessage
        ${''}                   | ${'must be string'}
        ${'a'}                  | ${'must be at least 2 characters'}
        ${'a                 '} | ${'must be at least 2 characters'}
        ${'a'.repeat(31)}       | ${'cannot exceed 30 characters'}
      `(
        `nameSchema().parse($value) should throw $errorMessage `,
        ({ value, errorMessage }) => {
          expect(() => nameSchema().parse(value)).toThrow(errorMessage);
        }
      );
    });
  });

  describe('descriptionSchema', () => {
    describe('returns', () => {
      it.each`
        value                             | returnValue
        ${undefined}                      | ${undefined}
        ${'q'}                            | ${'q'}
        ${'some'}                         | ${'some'}
        ${'some             description'} | ${'some description'}
        ${'s'.repeat(1000)}               | ${'s'.repeat(1000)}
      `(
        `descriptionSchema().parse($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(descriptionSchema().parse(value)).toEqual(returnValue);
        }
      );
    });

    describe('throws', () => {
      it.each`
        value               | errorMessage
        ${2}                | ${'must be string'}
        ${1}                | ${'must be string'}
        ${null}             | ${'must be string'}
        ${'   '}            | ${'must be string'}
        ${''}               | ${'must be string'}
        ${'s'.repeat(1001)} | ${`cannot exceed 1000 characters`}
      `(
        `descriptionSchema().parse($value) should throw $errorMessage `,
        ({ value, errorMessage }) => {
          expect(() => descriptionSchema().parse(value)).toThrowError(
            errorMessage
          );
        }
      );
    });
  });

  describe('barcodeSchema', () => {
    describe('returns', () => {
      it.each`
        value                 | returnValue
        ${'   12345678   '}   | ${'12345678'}
        ${'   1234567890123'} | ${'1234567890123'}
      `(
        `barcodeSchema().parse($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(barcodeSchema().parse(value)).toEqual(returnValue);
        }
      );
    });

    describe('throws', () => {
      it.each`
        value               | errorMessage
        ${'1234567'}        | ${'must be at least 8 digits'}
        ${'12345678901234'} | ${'cannot exceed 13 digits'}
        ${'somesomesomes'}  | ${'must contain only digits'}
        ${'somesomesomes'}  | ${'must contain only digits'}
      `(
        'barcodeSchema().parse($value) should throw $errorMessage ',
        ({ value, errorMessage }) => {
          expect(() => barcodeSchema().parse(value)).toThrow(errorMessage);
        }
      );
    });
  });
});
