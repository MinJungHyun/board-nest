import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
    cors: true
  });
  app.setGlobalPrefix('/api');
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
