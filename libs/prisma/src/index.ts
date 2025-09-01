// @index(['./**/*.ts', '!./**/*.{spec,test}.ts'], f => `export * from '${f.path}.js'`)
export * from './lib/prisma/prisma.module.js';
export * from './lib/prisma/providers/client.js';
export * from './lib/prisma/providers/repository.js';

