import { upperCaseFirst } from './upper-case-first.js';

describe('upperCaseFirst', () => {
  it('should upper case first', () => {
    expect(upperCaseFirst('some')).toEqual('Some');
  });
});
