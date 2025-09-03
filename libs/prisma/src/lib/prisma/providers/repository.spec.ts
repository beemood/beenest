import { inferResourceName } from '@beenest/utils';
import { InjectRepository } from './repository.js';

vi.mock('@beenest/utils', async (importActual) => {
  const actual = (await importActual()) as any;
  // Return an object that replaces the original module's exports
  return {
    ...actual,
    // We're creating a new mock function and exporting it as inferResourceName
    inferResourceName: vi.fn().mockReturnValue('Sample'),
  };
});

describe('repository', () => {
  it('should inject reopsitory', () => {
    class SampleController {
      constructor(@InjectRepository() protected readonly some: any) {}
    }

    expect(inferResourceName).toBeCalledTimes(1);
    expect(inferResourceName).toBeCalledWith('SampleController');
  });
});
