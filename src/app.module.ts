import {Module} from '@nestjs/common';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule} from '@nestjs/config';
import config from '../config';
// import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, load: [config]}),
      // TypeOrmModule.forRootAsync({
      //   useClass
      // }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
