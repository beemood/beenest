import { EmptyStringError } from '../errors/errors.js';
import { segments } from './segments.js';

describe('segments', () => {
  describe('returns', () => {
    it.each`
      stringValue                   | returnValue
      ${'some/path'}                | ${['some', 'path']}
      ${'some'}                     | ${['some']}
      ${'some/path/file-name.json'} | ${['some', 'path', 'file-name.json']}
    `(
      `segments($stringValue) should return $returnValue`,
      ({ stringValue, returnValue }) => {
        expect(segments(stringValue)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      stringValue  | error
      ${''}        | ${EmptyStringError}
      ${'    '}    | ${EmptyStringError}
      ${undefined} | ${Error}
      ${null}      | ${Error}
    `(
      `segments($stringValue) should throw $error `,
      ({ stringValue, error }) => {
        expect(() => segments(stringValue)).toThrow(error);
      }
    );
  });
});
