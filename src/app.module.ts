import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoConfigService } from './config/mongo-config.service';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

const environment = process.env.env?.trim() || 'development';
const configs = [`.env.${environment}.local`, `.env.${environment}`];

if (environment !== 'development') configs.shift();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: configs,
    }),
    MongooseModule.forRootAsync({
      useClass: MongoConfigService,
      imports: [ConfigModule],
    }),
    TaskModule,
  ],
})
export class AppModule {}
