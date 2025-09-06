import { type Prisma } from '@beenest/contact-db';
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
import { createEmailSchema, type CreateEmail } from './schemas/create-email.js';
import {
  orderByEmailSchema,
  type OrderEmail,
} from './schemas/order-by-email.js';
import {
  selectEmailFieldsSchema,
  type SelectEmailFields,
} from './schemas/select-email-fields.js';
import { updateEmailSchema, type UpdateEmail } from './schemas/update-email.js';
import { whereEmailSchema, type WhereEmail } from './schemas/where-email.js';

@ResourceController()
export class EmailController {
  constructor(
    @InjectRepository() protected readonly repo: Prisma.EmailDelegate
  ) {}

  @AutoMethod()
  async saveOne(
    @Body(createEmailSchema) data: CreateEmail,
    @Query(selectEmailFieldsSchema) select: SelectEmailFields
  ) {
    return await this.repo.create({ data, ...select });
  }

  @AutoMethod()
  async findAll(
    @Query(pageObjectSchema) page: Page,
    @Query(selectEmailFieldsSchema) select: SelectEmailFields,
    @Query(orderByEmailSchema) orderBy: OrderEmail,
    @Query(whereEmailSchema) where: WhereEmail
  ) {
    const query = { ...page, ...select, ...orderBy, ...where };
    return await this.repo.findMany(query);
  }

  @FindOneById()
  async findOneById(
    @ParamId() id: number,
    @Query(selectEmailFieldsSchema) select: SelectEmailFields
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
    @Body(updateEmailSchema) data: UpdateEmail,
    @Query(selectEmailFieldsSchema)
    select: SelectEmailFields
  ) {
    return await this.repo.update({ where: { id }, data, ...select });
  }
}
