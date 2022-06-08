import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongoConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const ip = this.config.get('database.host');
    const port = this.config.get('database.port');
    const name = this.config.get('database.name');

    return {
      uri: `mongodb://${ip}:${port}/${name}`,
      sslValidate: false,
      retryWrites: false,
    };
  }
}
