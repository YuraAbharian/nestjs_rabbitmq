import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import {ConfigService} from "@nestjs/config";

/**
 * bootstrap - entry point
 * @returns {Promise<void>}
 */
async function bootstrap() {
  /** app instance */
  const app = await NestFactory.create(AppModule);
  /**
   * adding global prefix to server URI... ex: api/example
   */
  app.setGlobalPrefix('api');
  /** logger instance */
  const logger = new Logger('bootstrap');

  const config: ConfigService = app.get(ConfigService);
  const PORT: number = config.get<number>('port');

  await app.listen(PORT, () => {
    logger.log(`SERVICE IS UP ON PORT: ${PORT}`);
  });
}
bootstrap();
