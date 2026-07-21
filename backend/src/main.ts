import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // НАСТРОЙКА CORS (один раз с параметрами)
    app.enableCors({
        origin: [
            'https://kv-hram-dev-my-v0-3-svdt-8mzehbvjw.vercel.app',
            'https://kv-hram-dev-my-v0-3.vercel.app',
            'http://localhost:3000', // для локальной разработки
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    });

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    app.setGlobalPrefix('api');

    const port = process.env.PORT || 3001;
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();