import { Connection } from 'mongoose';
import { TaskSchema } from '../entities/task.entity';

export const taskProvider = [
  {
    provide: 'TASK_MODEL',
    useFactory: (connection: Connection) => {
      return connection.model('Task', TaskSchema);
    },
    inject: ['TENANT_CONNECTION'],
  },
];
