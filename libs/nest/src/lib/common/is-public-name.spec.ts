import { isPublicName } from './is-public-name.js';
describe('isPublicName', () => {
  it.each`
    value                         | expected
    ${''}                         | ${false}
    ${'public'}                   | ${true}
    ${'Public'}                   | ${true}
    ${'PublicResourceController'} | ${true}
    ${'ProductControllerPublic'}  | ${true}
  `('isPublicName($value) should return expected', ({ value, expected }) => {
    expect(isPublicName(value)).toEqual(expected);
  });
});
