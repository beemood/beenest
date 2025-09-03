import { inferResourceName, names, OperationNames } from '@beenest/utils';
import { Post } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { OperationName } from '../../metadata/operation-name.js';
import { SelectParams } from '../swagger/select-params.js';

/**
 * `POST /singular-path`
 *
 * @group Method Decorators
 * @returns MethodDecorator
 */
export function SaveOne(): MethodDecorator {
  return (...args) => {
    const className = args[0].constructor.name;
    const resouceName = inferResourceName(className);
    const variants = names(resouceName);
    const path = `${variants.kebabCase}`;
    const summary = `Save one ${variants.kebabCase}`;

    Post(path)(...args);
    OperationName(OperationNames.WRITE_ONE)(...args);
    ApiOperation({ summary })(...args);
    SelectParams()(...args);
  };
}
