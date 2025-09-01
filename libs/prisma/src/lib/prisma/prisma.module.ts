import { DynamicModule, Module } from '@nestjs/common';
import { getClientToken, provideClient } from './providers/client.js';
import {
  getRepositoryToken,
  provideRepository,
} from './providers/repository.js';

export type PrismaModuleOptions<T extends object> = {
  clientInstance: T;
  datasourceName?: string;
};

export type PrismaModuleFeatureOptions = {
  datasourceName?: string;
  resourceNames: string[];
};

@Module({})
export class PrismaModule {
  static forRoot<T extends object>(
    options: PrismaModuleOptions<T>
  ): DynamicModule {
    return {
      module: PrismaModule,
      global: true,
      providers: [provideClient(options.clientInstance)],
      exports: [getClientToken(options.datasourceName)],
    };
  }

  static forFeature(options: PrismaModuleFeatureOptions): DynamicModule {
    const repositoryProviders = options.resourceNames.map((e) => {
      return provideRepository(e, options.datasourceName);
    });
    const repositoryTokens = options.resourceNames.map((e) => {
      return getRepositoryToken(e, options.datasourceName);
    });

    return {
      module: PrismaModule,
      global: true,
      providers: [...repositoryProviders],
      exports: [...repositoryTokens],
    };
  }
}
