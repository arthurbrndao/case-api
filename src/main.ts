import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = process.env.API_PORT ?? 3333;

  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  console.log(`app running in port ${PORT}`);
}
bootstrap();
