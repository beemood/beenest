import {
  formatFiles,
  generateFiles,
  names,
  readProjectConfiguration,
  type Tree,
} from '@nx/devkit';
import * as path from 'path';
import { type ResourceGeneratorSchema } from './schema';

export async function resourceGenerator(
  tree: Tree,
  options: ResourceGeneratorSchema
) {
  const __names = names(options.name);

  const projectCofig = readProjectConfiguration(tree, options.project);

  const sourceRoot = path.join(__dirname, 'files');
  const targetRoot = path.join(
    projectCofig.root,
    'src/app/resources',
    __names.fileName
  );

  generateFiles(tree, sourceRoot, targetRoot, { ...__names });
  await formatFiles(tree);
}

export default resourceGenerator;
