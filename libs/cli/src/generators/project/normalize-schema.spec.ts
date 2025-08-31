import { join } from 'path';
import { normalizeProjectGeneratorSchema } from './normalize-schema';

describe('normalizeProjectGeneratorSchema', () => {
  it('should normalize the schema', () => {
    const n = normalizeProjectGeneratorSchema(
      { directory: 'libs/project-name', type: 'lib' },
      { name: '@some/name' }
    );
    expect(n.directory).toEqual('libs/project-name');
    expect(n.fullProjectName).toEqual('@some/project-name');
    expect(n.projectName).toEqual('project-name');
    expect(n.sourceRoot).toEqual(join(__dirname, 'lib'));
    expect(n.targetRoot).toEqual('libs/project-name');
    expect(n.type).toEqual('lib');
  });
});
