import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { SecuredResource } from '../../metadata/secured.js';
import { ResourceController } from './resource-controller.js';
describe('Regular: ResourceController', () => {
  beforeAll(() => {
    vi.mock('@nestjs/swagger', () => {
      return {
        ApiTags: vi.fn().mockReturnValue(() => {}),
        ApiBearerAuth: vi.fn().mockReturnValue(() => {}),
      };
    });

    vi.mock('../../metadata/secured.js', () => {
      return {
        SecuredResource: vi.fn().mockReturnValue(() => {}),
      };
    });
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  @ResourceController()
  class SampleController {}

  it('should declerate resource controller', () => {
    expect(new SampleController()).toBeDefined();
  });

  it('should define swagger api tags', () => {
    expect(ApiTags).toHaveBeenCalledOnce();
    expect(ApiTags).toBeCalledWith('Sample');
  });

  it('should mark the resource as secure', () => {
    expect(SecuredResource).toHaveBeenCalledOnce();
    expect(ApiBearerAuth).toHaveBeenCalledOnce();
  });
});
