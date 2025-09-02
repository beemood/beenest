import { EmptyStringError } from '../errors/errors.js';
import { getLastSegment } from './get-last-segment.js';

describe('getLastSegment', () => {
  describe('returns', () => {
    it.each`
      stringValue                    | returnValue
      ${'some'}                      | ${'some'}
      ${'some/some'}                 | ${'some'}
      ${'some/other/some'}           | ${'some'}
      ${'some\\other\\some.json'}    | ${'some.json'}
      ${'some\\\\other\\some.json'}  | ${'some.json'}
      ${'some\\\\other///some.json'} | ${'some.json'}
      ${'some\\other\\some.'}        | ${'some.'}
    `(
      `getLastSegment($stringValue) should return $returnValue`,
      ({ stringValue, returnValue }) => {
        expect(getLastSegment(stringValue)).toEqual(returnValue);
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
      `getLastSegment($stringValue) should throw $error`,
      ({ stringValue, error }) => {
        expect(() => getLastSegment(stringValue)).toThrow(error);
      }
    );
  });
});
