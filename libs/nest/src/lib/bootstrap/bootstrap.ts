import { names } from '@beenest/utils';
import { Logger, type Type } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';

// export type IEntryNestModule =
//   | Type<any>
//   | DynamicModule
//   | ForwardReference
//   | Promise<IEntryNestModule>;

export async function bootstrap(module: Type) {
  const app = await NestFactory.create(module);

  app.enableCors({ origin: ['*'] });
  app.use(helmet());

  const config = app.get(ConfigService);
  const PORT = config.getOrThrow('PORT');

  const DEFAULT_TITLE = () => names(module.name).titleCase;
  const DEFAULT_DESCRIPTION = () => names(module.name).titleCase;

  const TITLE = config.get('TITLE', DEFAULT_TITLE);
  const DESCRIPTION = config.get('DESCRIPTION', DEFAULT_DESCRIPTION);

  const swaggerConfig = new DocumentBuilder()
    .setTitle(TITLE)
    .setDescription(DESCRIPTION)
    .addBearerAuth()
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerConfig);

  SwaggerModule.setup('api', app, swaggerDoc);

  await app.listen(PORT);

  Logger.log(`App is up at ${await app.getUrl()}`);
}
