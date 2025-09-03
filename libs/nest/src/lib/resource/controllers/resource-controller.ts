import { inferResourceName } from '@beenest/utils';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { isPublicName } from '../../common/is-public-name.js';
import { PublicResource } from '../../metadata/public.js';
import { SecuredResource } from '../../metadata/secured.js';

/**
 * Enhanced and featured resource controller decorator. Infers resoruce name, resource access policy by target class name, and set swagger metadata for the resouce.
 *
 * @group Class Decorators
 * @returns ClassDecorator
 * @throws Error {@link inferResourceName}
 */
export function ResourceController(): ClassDecorator {
  return (...args) => {
    Controller()(...args);
    const className = args[0].name;

    const resourceName = inferResourceName(className);

    if (isPublicName(className)) {
      ApiTags(resourceName + ' ( Public ) ')(...args);
      PublicResource()(...args);
    } else {
      ApiTags(resourceName)(...args);
      SecuredResource()(...args);
      ApiBearerAuth()(...args);
    }
  };
}
