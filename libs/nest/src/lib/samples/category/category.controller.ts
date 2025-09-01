import { Body, Query } from '@nestjs/common';
import { ResourceController } from '../../resource/controllers/resource-controller.js';
import { AutoMethod } from '../../resource/methods/auto-method.js';
import { ParamId } from '../../resource/params/param-id.js';
import type {
  CreateCategory,
  ModifyCategory,
  QueryCategory,
  UpdateCategory,
  WhereCategory,
} from './category-schema.js';

@ResourceController()
export class CategoryController {
  @AutoMethod()
  saveOne(@Body() data: CreateCategory) {
    return { data };
  }

  @AutoMethod()
  saveMany(@Body() data: CreateCategory[]) {
    return { data };
  }

  @AutoMethod()
  findAll(@Query() query: QueryCategory) {
    return { ...query };
  }

  @AutoMethod()
  findOneById(@ParamId() id: number, @Query() modifier: ModifyCategory) {
    return { id, ...modifier };
  }
  @AutoMethod()
  updateOneById(@ParamId() id: number, @Body() data: UpdateCategory) {
    return { id, data };
  }

  @AutoMethod()
  updateMany(@ParamId() id: number, @Body() data: UpdateCategory) {
    return { id, data };
  }

  @AutoMethod()
  deleteOneById(@ParamId() id: number, @Query() modifier: ModifyCategory) {
    return { id, ...modifier };
  }

  @AutoMethod()
  deleteMany(@Query() where: WhereCategory) {
    return { ...where };
  }
}
