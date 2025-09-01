// @index(['./**/*.ts', '!./**/*.{spec,test}.ts'], f => `export * from '${f.path}.js'`)
export * from './lib/common/is-public-name.js';
export * from './lib/common/is-secured-name.js';
export * from './lib/metadata/operation-name.js';
export * from './lib/metadata/public.js';
export * from './lib/metadata/resource-name.js';
export * from './lib/metadata/secured.js';
export * from './lib/resource/controllers/resource-controller.js';
export * from './lib/resource/methods/auto-method.js';
export * from './lib/resource/methods/delete-many.js';
export * from './lib/resource/methods/delete-one-by-id.js';
export * from './lib/resource/methods/find-many.js';
export * from './lib/resource/methods/find-one-by-id.js';
export * from './lib/resource/methods/save-many.js';
export * from './lib/resource/methods/save-one.js';
export * from './lib/resource/methods/update-many.js';
export * from './lib/resource/methods/update-one-by-id.js';
export * from './lib/resource/swagger/order-by-params.js';
export * from './lib/resource/swagger/paginator-params.js';
export * from './lib/resource/swagger/select-params.js';
export * from './lib/resource/swagger/where-paramas.js';

