import { names } from '@beenest/utils';
import {
  formatFiles,
  generateFiles, readJsonFile,
  type Tree
} from '@nx/devkit';
import { normalizeProjectGeneratorSchema } from './normalize-schema';
import { type ProjectGeneratorSchema } from './schema';
import { updateTsconfigReference } from './update-tsconfig';

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

  updateTsconfigReference(tree, directory);

  await formatFiles(tree);
}

export default projectGenerator;
