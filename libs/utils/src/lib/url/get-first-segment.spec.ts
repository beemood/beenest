import { EmptyStringError } from '../errors/errors.js';
import { getFirstSegment } from './get-first-segment.js';

describe('getFirstSegment', () => {
  describe('returns', () => {
    it.each`
      stringValue                    | returnValue
      ${'some'}                      | ${'some'}
      ${'some/some'}                 | ${'some'}
      ${'some/other/some'}           | ${'some'}
      ${'some\\other\\some.json'}    | ${'some'}
      ${'some\\\\other\\some.json'}  | ${'some'}
      ${'some\\\\other///some.json'} | ${'some'}
      ${'some\\other\\some.'}        | ${'some'}
    `(
      `getFirstSegment($stringValue) should return $returnValue`,
      ({ stringValue, returnValue }) => {
        expect(getFirstSegment(stringValue)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      stringValue  | error
      ${''}        | ${EmptyStringError}
      ${'   '}     | ${EmptyStringError}
      ${undefined} | ${Error}
      ${null}      | ${Error}
    `(
      `getFirstSegment($stringValue) should throw $error`,
      ({ stringValue, error }) => {
        expect(() => getFirstSegment(stringValue)).toThrow(error);
      }
    );
  });
});
