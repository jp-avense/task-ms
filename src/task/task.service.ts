import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { TaskDocument } from './entities/task.entity';
@Injectable()
export class TaskService {
  constructor(@Inject('TASK_MODEL') private taskModel: Model<TaskDocument>) {}

  getAll() {
    return this.taskModel.find().exec();
  }

  getOne(id: string) {
    return this.taskModel.findOne({ _id: id }).exec();
  }
}
