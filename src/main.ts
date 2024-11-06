import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validation de DTO'S toda la app, el whitelist es para solo tener los parametros que se pide
  app.useGlobalPipes( new ValidationPipe({ whitelist: true}));

  const config = new DocumentBuilder()
    .setTitle('Cats Example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  // Permitir CORS
  app.enableCors({
    origin: 'https:fastweb.com'
  });

  await app.listen(process.env.PORT || 3000);

}
bootstrap();
