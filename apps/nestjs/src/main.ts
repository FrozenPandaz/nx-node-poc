import { NestFactory, FastifyAdapter } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

console.log(environment);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter(), {
    logger: false
  });
  await app.listen(3000);
}
bootstrap();
