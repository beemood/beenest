import { ApiTags } from '@nestjs/swagger';
import { PublicResource } from '../../metadata/public.js';
import { ResourceController } from './resource-controller.js';

describe('Public: ResourceController', () => {
  beforeAll(() => {
    vi.mock('@nestjs/swagger', () => {
      return {
        ApiTags: vi.fn().mockReturnValue(() => {}),
        ApiBearerAuth: vi.fn().mockReturnValue(() => {}),
      };
    });

    vi.mock('../../metadata/public.js', () => {
      return {
        PublicResource: vi.fn().mockReturnValue(() => {}),
      };
    });
  });

  afterAll(() => {
    vi.clearAllMocks();
  });

  @ResourceController()
  class PublicSampleController {}

  it('should declerate resource controller', () => {
    expect(new PublicSampleController()).toBeDefined();
  });

  it('should define swagger api tags', () => {
    expect(ApiTags).toHaveBeenCalledOnce();
    expect(ApiTags).toBeCalledWith('Sample ( Public )');
  });

  it('should mark the resource as public', () => {
    expect(PublicResource).toHaveBeenCalledOnce();
  });
});
