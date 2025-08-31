import { Inject, Provider } from '@nestjs/common';

/**
 * Get prisma client injection token
 * @param datasourceName optional datasource name (to group resouces)
 * @returns
 */
export function getClientToken(datasourceName = '') {
  return `${datasourceName}_DATASOURCE`.toUpperCase();
}

/**
 * Provide prisma client instance
 * @param prismaClientInstance
 * @param datasourceName
 * @returns Provider
 */
export function provideClient<T extends object>(
  prismaClientInstance: T,
  datasourceName = ''
): Provider {
  return {
    provide: getClientToken(datasourceName),
    useValue: prismaClientInstance,
  };
}

/**
 * Inject prisma client instance
 * @param datasourceName optional datasource name (to group resources)
 * @returns ParameterDecorator
 */
export function InjectClient(datasourceName = ''): ParameterDecorator {
  return (...args) => {
    Inject(getClientToken(datasourceName))(...args);
  };
}
