import { INestApplication, Module } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { ResourceController } from '../controllers/resource-controller.js';
import { AutoMethod } from './auto-method.js';

describe('AutoMethod Decorators', () => {
  @ResourceController()
  class SampleController {
    @AutoMethod()
    findOneById() {
      return { findOneById: true };
    }

    @AutoMethod()
    findAll() {
      return { findAll: true };
    }

    @AutoMethod()
    saveOne() {
      return { saveOne: true };
    }
    @AutoMethod()
    saveMany() {
      return { saveMany: true };
    }

    @AutoMethod()
    updateOneById() {
      return { updateOneById: true };
    }

    @AutoMethod()
    updateMany() {
      return { updateMany: true };
    }

    @AutoMethod()
    deleteOneById() {
      return { deleteOneById: true };
    }

    @AutoMethod()
    deleteMany() {
      return { deleteMany: true };
    }
  }

  @Module({
    imports: [],
    controllers: [SampleController],
  })
  class AppModule {}

  let app: INestApplication;
  const controller = new SampleController();

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('app should be defined', () => {
    expect(app).toBeDefined();
  });

  it('POST /sample should work', async () => {
    return request(app.getHttpServer())
      .post('/sample')
      .expect(201)
      .expect(controller.saveOne());
  });

  it('POST /samples should work', async () => {
    return request(app.getHttpServer())
      .post('/samples')
      .expect(201)
      .expect(controller.saveMany());
  });

  it('GET /samples should work', async () => {
    return request(app.getHttpServer())
      .get('/samples')
      .expect(200)
      .expect(controller.findAll());
  });

  it('GET /sample/1 should work', async () => {
    return request(app.getHttpServer())
      .get('/sample/1')
      .expect(200)
      .expect(controller.findOneById());
  });

  it('PUT /sample/1 should work', async () => {
    return request(app.getHttpServer())
      .put('/sample/1')
      .expect(200)
      .expect(controller.updateOneById());
  });

  it('PUT /samples should work', async () => {
    return request(app.getHttpServer())
      .put('/samples')
      .expect(200)
      .expect(controller.updateMany());
  });

  it('DELETE /sample/1 should work', async () => {
    return request(app.getHttpServer())
      .delete('/sample/1')
      .expect(200)
      .expect(controller.deleteOneById());
  });

  it('DELETE /samples should work', async () => {
    return request(app.getHttpServer())
      .delete('/samples')
      .expect(200)
      .expect(controller.deleteMany());
  });

  afterAll(async () => {
    await app.close();
  });
});
