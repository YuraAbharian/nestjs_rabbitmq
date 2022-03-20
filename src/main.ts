import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config: ConfigService = app.get(ConfigService);
  const PORT: number = config.get<number>('port');
  await app.listen(PORT, () => {
    console.log(`SERVICE IS UP ON PORT: ${PORT}`);
  });
}
bootstrap();
