import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  // TODO use config
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost'],
        queue: 'saas_task_queue',
        queueOptions: {
          durable: false,
        },
      },
    }
  );

  await app.listen();
}

bootstrap();
