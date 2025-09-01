import { getResourceName } from '@beenest/utils';
import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { isPublicName } from '../../common/is-public-name.js';
import { PublicResource } from '../../metadata/public.js';
import { SecuredResource } from '../../metadata/secured.js';

export function ResourceController(): ClassDecorator {
  return (...args) => {
    Controller()(...args);
    const className = args[0].name;

    const resourceName = getResourceName(className);

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
