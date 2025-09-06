import { getFirstSegment, getLastSegment } from '@beenest/utils';
import {
  formatFiles,
  generateFiles,
  names,
  readJsonFile,
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
  const mainProjectJson = await readJsonFile('package.json');

  const shortProjectName = getLastSegment(options.project);
  const projectName = [
    getFirstSegment(mainProjectJson.name),
    shortProjectName,
  ].join('/');
  const fullProjectName = projectName;

  const projectCofig = readProjectConfiguration(tree, options.project);

  const sourceRoot = path.join(__dirname, 'files');
  const targetRoot = path.join(
    projectCofig.root,
    'src/app/resources',
    __names.fileName
  );

  generateFiles(tree, sourceRoot, targetRoot, {
    ...__names,
    fullProjectName,
    shortProjectName,
    projectName,
  });
  await formatFiles(tree);
}

export default resourceGenerator;
