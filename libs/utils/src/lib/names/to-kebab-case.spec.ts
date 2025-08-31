import { toKebabCase } from './to-kebab-case.js';

describe('toKebabCase', () => {
  it.each`
    value           | expected
    ${'Some'}       | ${'some'}
    ${'some'}       | ${'some'}
    ${'  some  '}   | ${'some'}
    ${'  SomeGo  '} | ${'some-go'}
    ${'  SomeGo  '} | ${'some-go'}
  `(`toKebabCase([value]) should return [expected]`, ({ value, expected }) => {
    expect(toKebabCase(value)).toEqual(expected);
  });
});
