import { InvalidNameError } from '@beenest/utils';
import { ResourceController } from './resource-controller.js';

describe('ResourceController', () => {
  it('should be declared with valid class names', () => {
    @ResourceController()
    class SomeControllers {}
  });

  it('should throw error for  invalid class name (resource name)', () => {
    expect(() => {
      @ResourceController()
      class Some {}
    }).toThrow(InvalidNameError);
  });
});
