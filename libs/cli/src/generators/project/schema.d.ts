export type ProjectType = 'lib' | 'api' | 'cli';

export interface ProjectGeneratorSchema {
  directory: string;
  type: ProjectType;
}
