import { EmptyStringError } from './errors.js';

describe('errors', () => {
  it('should be objectify', () => {
    try {
      throw new EmptyStringError();
    } catch (err: any) {
      expect(err).instanceOf(EmptyStringError);
    }
  });
});
