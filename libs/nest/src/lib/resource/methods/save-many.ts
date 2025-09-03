import { inferResourceName, OperationNames, pluralNames } from '@beenest/utils';
import { Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { SelectParams } from '../swagger/select-params.js';

/**
 * `POST /plural-path`
 * @returns MethodDecorator
 */
export function SaveMany(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = inferResourceName(className);
    const variants = pluralNames(resouceName);
    const path = `${variants.kebabCase}`;
    const summary = `Save many ${variants.kebabCase}`;

    Post(path)(...args);
    OperationName(OperationNames.WRITE_MANY)(...args);
    ApiOperation({ summary })(...args);
    SelectParams()(...args);
  };
}
