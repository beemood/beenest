import { isSecuredName } from './is-secured-name.js';
describe('isSecuredName', () => {
  it.each`
    value                          | expected
    ${''}                          | ${false}
    ${'SomeController'}            | ${false}
    ${'secured'}                   | ${true}
    ${'Secured'}                   | ${true}
    ${'SecuredResourceController'} | ${true}
    ${'ProductControllerSecured'}  | ${true}
  `('isSecuredName($value) should return expected', ({ value, expected }) => {
    expect(isSecuredName(value)).toEqual(expected);
  });
});
