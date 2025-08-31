import { toSnakeCase } from './to-snake-case.js';

describe('toSnakeCase', () => {
  it.each`
    value           | expected
    ${'Some'}       | ${'some'}
    ${'some'}       | ${'some'}
    ${'some-go'}    | ${'some_go'}
    ${'some.go'}    | ${'some_go'}
    ${'some_go'}    | ${'some_go'}
    ${'SOME_GO'}    | ${'some_go'}
    ${'  some  '}   | ${'some'}
    ${'  SomeGo  '} | ${'some_go'}
    ${'  SomeGo  '} | ${'some_go'}
  `(`toSnakeCase([value]) should return [expected]`, ({ value, expected }) => {
    expect(toSnakeCase(value)).toEqual(expected);
  });
});
