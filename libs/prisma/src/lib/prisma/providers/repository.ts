import { inferResourceName, names } from '@beenest/utils';
import { Inject, type Provider } from '@nestjs/common';
import { getClientToken } from './client.js';

/**
 * Get resource repository token
 * @param resourceName resource name such as category, product, user.
 * @param datasourceName database name or group name (to group resources)
 * @returns injection token
 */
export function getRepositoryToken(resourceName: string, datasourceName = '') {
  return `${datasourceName}_${resourceName}_REPOSITORY`.toUpperCase();
}

/**
 * Provide resource repository
 * @param resourceName resource name such as category, product, user.
 * @param datasourceName database name or group name (to group resources)
 * @returns Provider
 */
export function provideRepository(
  resourceName: string,
  datasourceName = ''
): Provider {
  resourceName = names(resourceName).camelCase;
  return {
    inject: [getClientToken(datasourceName)],
    provide: getRepositoryToken(resourceName, datasourceName),
    useFactory(client: any) {
      return client[resourceName];
    },
  };
}

/**
 * Inject resource repository
 * If resourceName is not provided, it is extracted from the target class name
 * @param resourceName resource name such as category, product, user
 * @param datasourceName database name or group name (to group resources)
 * @returns
 */
export function InjectRepository(
  resourceName?: string,
  datasourceName = ''
): ParameterDecorator {
  return (...args) => {
    if (resourceName) {
      Inject(getRepositoryToken(resourceName, datasourceName))(...args);
    } else {
      resourceName = inferResourceName((args[0] as any).name);

      Inject(
        getRepositoryToken(
          names(resourceName).screamingSnakeCase,
          datasourceName
        )
      )(...args);
    }
  };
}
