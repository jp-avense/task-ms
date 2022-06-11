import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ConfigModule } from '@nestjs/config';
import configuration, { getConfigPath } from './config/configuration';

const configPath = getConfigPath();
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: configPath,
    }),
    TaskModule,
  ],
})
export class AppModule {}
