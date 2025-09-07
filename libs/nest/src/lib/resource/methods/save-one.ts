import { inferResourceName, names, OperationNames } from '@beenest/utils';
import { Post } from '@nestjs/common';
import { type ApiBodyOptions, ApiOperation } from '@nestjs/swagger';

import { OperationName } from '../../metadata/operation-name.js';
import { ObjectApiBody } from '../swagger/api-body.js';
import { SelectParams } from '../swagger/select-params.js';

export type SaveOneOptions = {
  summary?: string;
  bodyOptions?: ApiBodyOptions;
};

/**
 * `POST /singular-path`
 *
 * @group Method Decorators
 * @returns MethodDecorator
 */
export function SaveOne(options?: SaveOneOptions): MethodDecorator {
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
    ObjectApiBody(options?.bodyOptions)(...args);
  };
}
