import { toTitleCase } from './to-title-case.js';

describe('toTitleCase', () => {
  it.each`
    value           | expected
    ${'Some'}       | ${'Some'}
    ${'some'}       | ${'Some'}
    ${'some-go'}    | ${'Some Go'}
    ${'some.go'}    | ${'Some Go'}
    ${'some_go'}    | ${'Some Go'}
    ${'SOME_GO'}    | ${'Some Go'}
    ${'  some  '}   | ${'Some'}
    ${'  SomeGo  '} | ${'Some Go'}
    ${'  SomeGo  '} | ${'Some Go'}
  `(`toTitleCase([value]) should return [expected]`, ({ value, expected }) => {
    expect(toTitleCase(value)).toEqual(expected);
  });
});
