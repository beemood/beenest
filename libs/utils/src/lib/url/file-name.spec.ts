import { getFileName } from './file-name.js';

describe('fileName', () => {
  it.each`
    value                          | expected
    ${'some'}                      | ${'some'}
    ${'some/some'}                 | ${'some'}
    ${'some/other/some'}           | ${'some'}
    ${'some\\other\\some.json'}    | ${'some.json'}
    ${'some\\\\other\\some.json'}  | ${'some.json'}
    ${'some\\\\other///some.json'} | ${'some.json'}
    ${'some\\other\\some.'}        | ${'some.'}
  `(`fileName([value]) should return [expected]`, ({ value, expected }) => {
    expect(getFileName(value)).toEqual(expected);
  });
});
