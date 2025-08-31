import { toSentenceCase } from './to-sentence-case.js';

describe('toSentenceCase', () => {
  it.each`
    value           | expected
    ${'Some'}       | ${'Some'}
    ${'some'}       | ${'Some'}
    ${'some-go'}    | ${'Some go'}
    ${'some.go'}    | ${'Some go'}
    ${'some_go'}    | ${'Some go'}
    ${'SOME_GO'}    | ${'Some go'}
    ${'  some  '}   | ${'Some'}
    ${'  SomeGo  '} | ${'Some go'}
    ${'  SomeGo  '} | ${'Some go'}
  `(
    `toSentenceCase([value]) should return [expected]`,
    ({ value, expected }) => {
      expect(toSentenceCase(value)).toEqual(expected);
    }
  );
});
