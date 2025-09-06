import {
  AutoMethod,
  Body,
  DeleteOneById,
  FindOneById,
  ParamId, Query,
  ResourceController,
  UpdateOneById
} from '@beenest/nest';
import { InjectRepository } from '@beenest/prisma';
import { pageObjectSchema, type Page } from '@beenest/zod';
import { Inject } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import {
  createCategorySchema,
  type CreateCategory,
} from './schemas/create-category.js';
import {
  orderByCategorySchema,
  type OrderCategory,
} from './schemas/order-by-category.js';
import {
  selectCategoryFieldsSchema,
  type SelectCategoryFields,
} from './schemas/select-category-fields.js';
import {
  whereCategorySchema,
  type WhereCategory,
} from './schemas/where-category.js';

@ResourceController()
export class CategoryController {
  constructor(
    @InjectRepository() protected readonly repo: any,
    @Inject(EventEmitter2) public readonly emitter: EventEmitter2
  ) {}

  @AutoMethod()
  saveOne(
    @Body(createCategorySchema) body: CreateCategory,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields
  ) {
    return { body, select };
  }

  @AutoMethod()
  findAll(
    @Query(pageObjectSchema) page: Page,
    @Query(selectCategoryFieldsSchema) select: SelectCategoryFields,
    @Query(orderByCategorySchema) orderBy: OrderCategory,
    @Query(whereCategorySchema) where: WhereCategory
  ) {
    this.emitter.emit('category.findMany', { page, select, orderBy, where });
    return { page, select, orderBy, where };
  }

  @FindOneById()
  findOneById(@ParamId() id: number) {
    return { id };
  }

  @DeleteOneById()
  deleteOneById(@ParamId() id: number) {
    return { id };
  }

  @UpdateOneById()
  updateOneByID(@ParamId() id: number) {
    return { id };
  }
}
