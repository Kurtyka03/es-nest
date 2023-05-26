import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { AtGuard } from './common/guard/at.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const ref = new Reflector()
  app.useGlobalGuards(new AtGuard(ref))
  await app.listen(3000);
}
bootstrap();
