import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';
import { Logger } from '@nestjs/common';

const logger = new Logger('ESPELEO-CATASTRO');
const PORT = process.env.APP_PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Helmet security (14 http middlewares securities)
  app.use(helmet());

  //app.useGlobalInterceptors(new LoggingInterceptor());
  //app.useGlobalInterceptors(new TransformInterceptor());

  // Enabling Cross-origin resource sharing (CORS)
  app.enableCors();

  await app.listen(PORT);

  // Enabling CSRF Protection
  app.use(csurf());

  logger.log(`... starting on port: ${PORT}`);
}
bootstrap().then((r) => r);
