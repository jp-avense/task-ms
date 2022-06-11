import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TenantModule } from 'src/tenant/tenant.module';
import { taskProvider } from './providers/task.provider';
@Module({
  imports: [TenantModule],
  controllers: [TaskController],
  providers: [TaskService, ...taskProvider],
  exports: [TaskService],
})
export class TaskModule {}
