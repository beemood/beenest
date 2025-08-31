import { ProjectGeneratorSchema } from './schema';
import { getFirstSegment, getLastSegment } from '@beenest/utils';
import path from 'path';
import { NormalizedProjectGeneratorSchema } from './normalized-schema';

export function normalizeProjectGeneratorSchema(
  options: ProjectGeneratorSchema,
  mainProjectJson: Record<string, any>
): NormalizedProjectGeneratorSchema {
  const { directory, type } = options;
  const targetRoot = directory;
  const projectName = getLastSegment(directory);
  const sourceRoot = path.join(__dirname, type);
  const fullProjectName =
    getFirstSegment(mainProjectJson.name) + '/' + projectName;
  return {
    targetRoot,
    sourceRoot,
    projectName,
    fullProjectName,
    directory,
    type,
  };
}
