import { beforeAll } from 'vitest';
import { CategoryController } from './category.controller.js';

describe('CategoryController', () => {
  let controller: CategoryController;
  beforeAll(() => {
    controller = new CategoryController({}, {} as any);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
