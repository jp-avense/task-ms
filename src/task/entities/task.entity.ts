import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { TaskDetail } from '../dto/task-detail.dto';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  task_details: TaskDetail[];

  @Prop({ type: Object })
  assigned_to: object;

  @Prop()
  status_id: string;

  @Prop()
  type_id: string;

  @Prop()
  is_archived: boolean;

  @Prop()
  created_at: Date;

  @Prop()
  archived_at: Date;

  @Prop()
  last_updated_at: Date;

  @Prop()
  execution_start_date: Date;

  @Prop()
  execution_end_date: Date;

  @Prop({ type: Object })
  forms: object;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
