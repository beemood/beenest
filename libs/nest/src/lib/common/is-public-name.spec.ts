import { isPublicName } from './is-public-name.js';

describe('isPublicName', () => {
  it.each`
    resourceName                  | expected
    ${''}                         | ${false}
    ${'public'}                   | ${true}
    ${'Public'}                   | ${true}
    ${'PublicResourceController'} | ${true}
    ${'ProductControllerPublic'}  | ${true}
  `(
    'isPublicName($resourceName) should return $expected',
    ({ resourceName, expected }) => {
      expect(isPublicName(resourceName)).toEqual(expected);
    }
  );
});
