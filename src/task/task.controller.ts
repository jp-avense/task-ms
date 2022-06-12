import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload, RpcException } from '@nestjs/microservices';
import { GetOneDto } from './dto/get-one.dto';
import { TaskService } from './task.service';

@Controller()
@UsePipes(new ValidationPipe())
export class TaskController {
  constructor(private taskService: TaskService) {}

  @MessagePattern('getAll')
  async getAll() {
    return await this.taskService.getAll();
  }

  @MessagePattern('getOne')
  async getOne(@Payload() body: GetOneDto) {
    try {
      return await this.taskService.getOne(body.id);
    } catch (error) {
      throw new RpcException({
        status: 404,
        message: 'Task not found',
      });
    }
  }
}
