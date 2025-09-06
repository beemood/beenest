import { type Tree, updateJson } from '@nx/devkit';

export function updateTsconfigReference(tree: Tree, directory: string) {
  updateJson(tree, 'tsconfig.json', (value) => {
    if (value.references) {
      value.references.push({
        path: `./${directory}`,
      });
    }

    return value;
  });
}
