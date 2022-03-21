import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from '@nestjs/config';

import {AppController} from './app.controller';
import {AppService} from './app.service';
import config from '../config';
import {ProductModule} from './components/product/product.module';
import {TypeOrmConfigService} from "../config/TypeOrmConfigService";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true, load: [config]}),
        ProductModule,
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigService,
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
