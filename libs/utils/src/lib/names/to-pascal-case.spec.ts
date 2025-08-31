import { toPascalCase } from './to-pascal-case.js';

describe('toPascalCase', () => {
  it.each`
    value           | expected
    ${'Some'}       | ${'Some'}
    ${'some'}       | ${'Some'}
    ${'some-go'}    | ${'SomeGo'}
    ${'some.go'}    | ${'SomeGo'}
    ${'some_go'}    | ${'SomeGo'}
    ${'SOME_GO'}    | ${'SomeGo'}
    ${'  some  '}   | ${'Some'}
    ${'  SomeGo  '} | ${'SomeGo'}
    ${'  SomeGo  '} | ${'SomeGo'}
  `(`toPascalCase([value]) should return [expected]`, ({ value, expected }) => {
    expect(toPascalCase(value)).toEqual(expected);
  });
});
