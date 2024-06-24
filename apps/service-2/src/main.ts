import { NestFactory } from '@nestjs/core';
import { Service2Module } from './service-2.module';

async function bootstrap() {
  const app = await NestFactory.create(Service2Module);
  await app.listen(3001);
}
bootstrap();
