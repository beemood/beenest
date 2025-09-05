import {
  AutoMethod,
  DeleteOneById,
  FindOneById,
  ResourceController,
  UpdateOneById,
} from '@beenest/nest';
import { InjectRepository } from '@beenest/prisma';

@ResourceController()
export class CategoryController {
  constructor(@InjectRepository() protected readonly repo: any) {}
  @AutoMethod()
  findAll() {
    return this.repo.findMany();
  }

  @FindOneById()
  findOneById() {
    return this.repo.findOneById();
  }

  @DeleteOneById()
  deleteOneById() {
    return this.repo.deleteOneById();
  }

  @UpdateOneById()
  updateOneByID() {
    return this.repo.updateOneById();
  }
}
