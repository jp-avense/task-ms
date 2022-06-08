import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from './task.entity';
import { CreateTaskDTO } from './dto/create-task.dto';

@Injectable()
export class TaskService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  getAll() {
    return this.taskModel.find().exec();
  }

  getOne(id: string) {
    return this.taskModel.findOne({ _id: id }).exec();
  }

  create(body: CreateTaskDTO) {
    const task = new this.taskModel(body);
    return task.save();
  }
}
