import { toNullFunction } from './to-null-function.js';

describe('toNullFunction', () => {
  const throwFunction = (...args: any[]) => {
    if (args[0] === undefined) {
      return undefined;
    }
    throw new Error();
  };

  it.each`
    value
    ${'some'}
    ${''}
    ${1}
    ${100}
    ${null}
    ${{}}
    ${null}
  `(`toNullFunction(functionThatThrows) should return null`, ({ value }) => {
    expect(toNullFunction(throwFunction)(value)).toEqual(null);
  });

  it.each`
    value
    ${undefined}
  `(
    `toNullFunction(functionThatThrows) should return undefined`,
    ({ value }) => {
      expect(toNullFunction(throwFunction)(value)).toEqual(undefined);
    }
  );
});
