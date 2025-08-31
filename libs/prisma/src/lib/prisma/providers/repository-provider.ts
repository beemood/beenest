import { Inject, Provider } from '@nestjs/common';
import { getClientToken } from './client-provider.js';

/**
 *
 * @param resourceName resource name such as category, product, user.
 * @param datasourceName refers to database name or group name (to group resources)
 * @returns injection token
 */
export function getRepositoryToken(resourceName: string, datasourceName = '') {
  return `${datasourceName}_${resourceName}_REPOSITORY`.toUpperCase();
}

/**
 * Provider resource repository
 * @param resourceName resource name such as category, product, user.
 * @param datasourceName refers to database name or group name (to group resources)
 * @returns Provider
 */
export function provideRepository(
  resourceName: string,
  datasourceName = ''
): Provider {
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(resourceName, datasourceName),
    useFactory(client: any) {
      return client[resourceName];
    },
  };
}

export function InjectRepository(
  resourceName?: string,
  datasourceName = ''
): ParameterDecorator {
  return (...args) => {
    if (resourceName) {
      Inject(getRepositoryToken(resourceName, datasourceName))(...args);
    } else {
      Inject(getRepositoryToken(args[0].constructor.name, datasourceName))(
        ...args
      );
    }
  };
}
