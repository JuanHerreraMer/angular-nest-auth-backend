import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  /**
   * whiteList: Remueve todo lo que no está
   * incluído en los DTOs
   * forbidNonWhiteListed: Retorna bad request
   * si hay propiedades en el objeto no requeridas
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen( process.env.PORT || 3000);
}
bootstrap();
