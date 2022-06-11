import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { ValidationExceptionFilter } from 'src/filters/validation.filter';

async function bootstrap() {
  const { RABBIT_HOST, RABBIT_PORT, RABBIT_TASK_QUEUE } = process.env;

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [`amqp://${RABBIT_HOST}:${RABBIT_PORT}`],
        queue: RABBIT_TASK_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    }
  );
  app.useGlobalFilters(new ValidationExceptionFilter());
  await app.listen();
}

bootstrap();
