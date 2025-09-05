import { positiveIntegerSchema, positiveNumberSchema } from './literals.js';

describe('Number Literals', () => {
  describe('positiveNumberSchema', () => {
    describe('returns', () => {
      it.each`
        value            | returnValue
        ${1}             | ${1}
        ${1.3}           | ${1.3}
        ${1_000_000_000} | ${1_000_000_000}
      `(
        `positiveNumberSchema().parse($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(positiveNumberSchema().parse(value)).toEqual(returnValue);
        }
      );
    });

    describe('throws', () => {
      it.each`
        value        | errorMessage
        ${''}        | ${'must be number'}
        ${true}      | ${'must be number'}
        ${false}     | ${'must be number'}
        ${undefined} | ${'must be number'}
        ${null}      | ${'must be number'}
        ${-1}        | ${'must be positive'}
        ${0}         | ${'must be positive'}
      `(
        `positiveNumberSchema($value) should throw $errorMessage `,
        ({ value, errorMessage }) => {
          expect(() => positiveNumberSchema().parse(value)).toThrow(
            errorMessage
          );
        }
      );
    });
  });

  describe('PositiveIntegerSchema', () => {
    describe('returns', () => {
      it.each`
        value            | returnValue
        ${1}             | ${1}
        ${1_000_000_000} | ${1_000_000_000}
      `(
        `PositiveIntegerSchema().parse($value) should return $returnValue`,
        ({ value, returnValue }) => {
          expect(positiveIntegerSchema().parse(value)).toEqual(returnValue);
        }
      );
    });

    describe('throws', () => {
      it.each`
        value        | errorMessage
        ${''}        | ${'must be integer'}
        ${true}      | ${'must be integer'}
        ${false}     | ${'must be integer'}
        ${undefined} | ${'must be integer'}
        ${null}      | ${'must be integer'}
        ${-1}        | ${'must be positive'}
        ${0}         | ${'must be positive'}
      `(
        `PositiveIntegerSchema().parse($value) should throw $errorMessage `,
        ({ value, errorMessage }) => {
          expect(() => positiveIntegerSchema().parse(value)).toThrow(
            errorMessage
          );
        }
      );
    });
  });
});
