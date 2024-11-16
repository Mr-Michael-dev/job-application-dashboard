import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["https://job-application-dashboard.vercel.app/"], // or your frontend domain
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
