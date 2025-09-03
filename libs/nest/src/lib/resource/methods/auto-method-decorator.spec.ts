import { ResourceController } from '../controllers/resource-controller.js';
import { AutoMethod } from './auto-method.js';

describe('AuthMethod: Decorators', () => {
  @ResourceController()
  class SampleController {
    @AutoMethod()
    findOneById() {
      return { findOneById: true };
    }
  }
});
