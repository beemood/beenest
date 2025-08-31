import { formatFiles, generateFiles, readJsonFile, Tree } from '@nx/devkit';
import { ProjectGeneratorSchema } from './schema';
import { names } from '@beenest/utils';
import { normalizeProjectGeneratorSchema } from './normalize-schema';

export async function projectGenerator(
  tree: Tree,
  options: ProjectGeneratorSchema
) {
  const mp = readJsonFile('package.json');
  const { directory, fullProjectName, projectName, sourceRoot, targetRoot } =
    normalizeProjectGeneratorSchema(options, mp);

  generateFiles(tree, sourceRoot, targetRoot, {
    directory,
    projectName,
    fullProjectName,
    targetRoot,
    sourceRoot,
    mp,
    ...names(projectName),
  });
  await formatFiles(tree);
}

export default projectGenerator;
