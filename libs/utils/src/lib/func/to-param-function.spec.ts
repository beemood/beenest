import { toParamFunction } from './to-param-function.js';

describe('toParamFunction', () => {
  const throwingFunction = (...args: any[]) => {
    if (args[0] === 'pass') {
      return 'ok';
    }
    throw new Error();
  };

  it("toParamFunction(throwingFunction)('pass') should return 'ok'", () => {
    expect(toParamFunction(throwingFunction)('pass')).toEqual('ok');
  });
  it.each`
    params
    ${''}
    ${'some'}
    ${1}
    ${true}
    ${false}
    ${[1, 2, 3]}
    ${['some', 'param']}
  `(
    `toParamFunction(throwingFunction)($params) should return params $params`,
    ({ params }) => {
      if (Array.isArray(params)) {
        expect(toParamFunction(throwingFunction)(...params)).toEqual(params);
      } else {
        expect(toParamFunction(throwingFunction)(params)).toEqual(params);
      }
    }
  );
});
