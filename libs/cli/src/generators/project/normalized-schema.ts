import { type ProjectType } from './schema';

export type NormalizedProjectGeneratorSchema = {
  type: ProjectType;
  directory: string;
  targetRoot: string;
  sourceRoot: string;
  projectName: string;
  fullProjectName: string;
};
