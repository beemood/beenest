// @index(['./app/**/*.ts', '!./**/*.{spec,test}.ts'], f => `export * from '${f.path}.js'`)
export * from './app/app.module.js';
export * from './app/inventory.module.js';
export * from './app/resources/category/category.controller.js';
export * from './app/resources/category/category.listener.js';
export * from './app/resources/category/category.module.js';
export * from './app/resources/category/schemas/category.js';
export * from './app/resources/category/schemas/create-category.js';
export * from './app/resources/category/schemas/order-by-category.js';
export * from './app/resources/category/schemas/select-category-fields.js';
export * from './app/resources/category/schemas/update-category.js';
export * from './app/resources/category/schemas/where-category.js';

