import { segments } from './segments.js';

describe('segments', () => {
  it('should return segments', () => {
    expect(segments('some/other')).toEqual(['some', 'other']);
  });
});
