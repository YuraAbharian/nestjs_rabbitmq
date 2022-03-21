import {Injectable} from "@nestjs/common";
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from "@nestjs/typeorm";
import {ConfigService} from "@nestjs/config";

/** TypeOrmConfigService */
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    /**
     * @param  configService - {ConfigService}
     */
    constructor(private readonly configService: ConfigService) {
    }

    /**
     * createTypeOrmOptions
     * @returns {TypeOrmModuleOptions}
     */
    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.configService.get<string>('db.type'),
            host: this.configService.get<string>('db.host'),
            port: this.configService.get<number>('db.port'),
            username: this.configService.get<string>('db.username'),
            password: this.configService.get<string>('db.password'),
            database: this.configService.get<string>('db.database'),
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            autoLoadEntities: true,
            synchronize: true,
        };
    }
}