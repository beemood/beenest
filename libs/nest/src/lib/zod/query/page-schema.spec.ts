import { PageSchema } from './page-schema.js';

describe('PageSchema', () => {
  it.each`
    value                      | result
    ${`{"take":10, "skip":0}`} | ${{ take: 10, skip: 0 }}
    ${{ take: 10, skip: 0 }}   | ${{ take: 10, skip: 0 }}
    ${{ take: 10 }}            | ${{ take: 10 }}
    ${{ skip: 10 }}            | ${{ skip: 10 }}
    ${{}}                      | ${{}}
    ${undefined}               | ${undefined}
  `('PageSchema.parse($value) should return $result', ({ value, result }) => {
    expect(PageSchema.parse(value)).toEqual(result);
  });
});
