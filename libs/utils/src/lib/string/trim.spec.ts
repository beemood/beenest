import { EmptyStringError } from '../errors/errors.js';
import { trim } from './trim.js';

describe('trim', () => {
  describe('returns', () => {
    it.each`
      stringValue                               | returnValue
      ${'          some      value     '}       | ${'some value'}
      ${'                   s'}                 | ${'s'}
      ${'s                                   '} | ${'s'}
    `(
      `trim($stringValue) should return $returnValue`,
      ({ stringValue, returnValue }) => {
        expect(trim(stringValue)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      stringValue  | error
      ${''}        | ${EmptyStringError}
      ${'   '}     | ${EmptyStringError}
      ${1}         | ${TypeError}
      ${true}      | ${TypeError}
      ${false}     | ${TypeError}
      ${{}}        | ${TypeError}
      ${NaN}       | ${TypeError}
      ${undefined} | ${TypeError}
      ${null}      | ${TypeError}
    `(`trim($stringValue) should throw $error`, ({ stringValue, error }) => {
      expect(() => trim(stringValue)).toThrow(error);
    });
  });
});
