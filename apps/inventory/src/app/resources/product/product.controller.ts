import { type Prisma } from '@beenest/inventory-db';
import {
  AutoMethod,
  Body,
  DeleteOneById,
  FindOneById,
  ParamId,
  Query,
  ResourceController,
  UpdateOneById,
} from '@beenest/nest';
import { InjectRepository } from '@beenest/prisma';
import { pageObjectSchema, type Page } from '@beenest/zod';
import {
  createProductSchema,
  type CreateProduct,
} from './schemas/create-product.js';
import {
  orderByProductSchema,
  type OrderProduct,
} from './schemas/order-by-product.js';
import {
  selectProductFieldsSchema,
  type SelectProductFields,
} from './schemas/select-product-fields.js';
import {
  updateProductSchema,
  type UpdateProduct,
} from './schemas/update-product.js';
import {
  whereProductSchema,
  type WhereProduct,
} from './schemas/where-product.js';

@ResourceController()
export class ProductController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.ProductDelegate
  ) {}

  @AutoMethod()
  async saveOne(
    @Body(createProductSchema) data: CreateProduct,
    @Query(selectProductFieldsSchema) select: SelectProductFields
  ) {
    return await this.repo.create({ data, ...select });
  }

  @AutoMethod()
  async findAll(
    @Query(pageObjectSchema) page: Page,
    @Query(selectProductFieldsSchema) select: SelectProductFields,
    @Query(orderByProductSchema) orderBy: OrderProduct,
    @Query(whereProductSchema) where: WhereProduct
  ) {
    const query = { ...page, ...select, ...orderBy, ...where };
    return await this.repo.findMany(query);
  }

  @FindOneById()
  async findOneById(
    @ParamId() id: number,
    @Query(selectProductFieldsSchema) select: SelectProductFields
  ) {
    return await this.repo.findUnique({ where: { id }, ...select });
  }

  @DeleteOneById()
  async deleteOneById(@ParamId() id: number) {
    return await this.repo.delete({ where: { id } });
  }

  @UpdateOneById()
  async updateOneByID(
    @ParamId() id: number,
    @Body(updateProductSchema) data: UpdateProduct,
    @Query(selectProductFieldsSchema)
    select: SelectProductFields
  ) {
    return await this.repo.update({ where: { id }, data, ...select });
  }
}
