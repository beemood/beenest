import { EmptyStringError } from '../errors/errors.js';
import { getFileName } from './get-file-name.js';

describe('getFileName', () => {
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
      `getFileName($stringValue) should return $returnValue`,
      ({ stringValue, returnValue }) => {
        expect(getFileName(stringValue)).toEqual(returnValue);
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
      `getFileName($stringValue) should throw $error`,
      ({ stringValue, error }) => {
        expect(() => getFileName(stringValue)).toThrow(error);
      }
    );
  });
});
