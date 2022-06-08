import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateTaskDTO } from './dto/create-task.dto';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private taskService: TaskService) {}

  @MessagePattern('getAll')
  async getAll() {
    return await this.taskService.getAll();
  }

  @MessagePattern('getOne')
  async getOne(@Payload() body: { id: string }) {
    return await this.taskService.getOne(body.id);
  }

  @MessagePattern('create')
  async create(@Payload() body: CreateTaskDTO) {
    return await this.taskService.create(body);
  }
}
