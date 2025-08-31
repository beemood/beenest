import { toCamelCase } from './to-camel-case.js';

describe('toCamelCase', () => {
  it.each`
    value           | expected
    ${'Some'}       | ${'some'}
    ${'some'}       | ${'some'}
    ${'  some  '}   | ${'some'}
    ${'  SomeGo  '} | ${'someGo'}
    ${'  SomeGo  '} | ${'someGo'}
  `(`toCamelCase([value]) should return [expected]`, ({ value, expected }) => {
    expect(toCamelCase(value)).toEqual(expected);
  });
});
