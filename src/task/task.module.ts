import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({})
export class TaskModule {
  controllers: [TaskController];
  providers: [TaskService];
  exports: [TaskService];
}
