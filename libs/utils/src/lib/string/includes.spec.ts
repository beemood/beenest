import { EmptyStringError } from '../errors/errors.js';
import { includes } from './includes.js';

describe('includes', () => {
  describe('returns', () => {
    it.each`
      mainString | subString | returnValue
      ${'some'}  | ${'me'}   | ${true}
      ${'some'}  | ${'Me'}   | ${true}
      ${'some'}  | ${'ME'}   | ${true}
      ${'SOME'}  | ${'me'}   | ${true}
      ${'SOME'}  | ${'S'}    | ${true}
      ${'SOME'}  | ${'Me'}   | ${true}
      ${'SOME'}  | ${'mE'}   | ${true}
      ${'SOME'}  | ${'se'}   | ${false}
      ${'SOME'}  | ${'_'}    | ${false}
      ${'SOME'}  | ${'.'}    | ${false}
      ${'SOME'}  | ${'_'}    | ${false}
      ${'SOME'}  | ${'\\'}   | ${false}
    `(
      `includes($mainString, $subString) should return $returnValue`,
      ({ mainString, subString, returnValue }) => {
        expect(includes(mainString, subString)).toEqual(returnValue);
      }
    );
  });

  describe('throws', () => {
    it.each`
      mainString   | subString    | error
      ${''}        | ${''}        | ${EmptyStringError}
      ${'   '}     | ${''}        | ${EmptyStringError}
      ${undefined} | ${''}        | ${Error}
      ${null}      | ${''}        | ${Error}
      ${true}      | ${''}        | ${Error}
      ${false}     | ${''}        | ${Error}
      ${{}}        | ${''}        | ${Error}
      ${'some'}    | ${undefined} | ${Error}
      ${'some'}    | ${null}      | ${Error}
      ${'some'}    | ${true}      | ${Error}
      ${'some'}    | ${false}     | ${Error}
      ${'some'}    | ${{}}        | ${Error}
    `(
      `includes($mainString, $subString) should throw $error `,
      ({ mainString, subString, error }) => {
        expect(() => includes(mainString, subString)).toThrow(error);
      }
    );
  });
});
