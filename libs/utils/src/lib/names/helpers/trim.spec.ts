import { trim } from './trim.js';

describe('trim', () => {
  it('should trim text', () => {
    expect(trim('some          text        ')).toEqual('some text');
  });
});
