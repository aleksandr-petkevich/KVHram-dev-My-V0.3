// import { NestFactory } from '@nestjs/core';
// import { ValidationPipe } from '@nestjs/common';
// import { AppModule } from './app.module';

// async function bootstrap() {
//     const app = await NestFactory.create(AppModule);

//     // НАСТРОЙКА CORS (один раз с параметрами)
//     app.enableCors({
//         origin: [
//             'https://kv-hram-dev-my-v0-3-svdt-8mzehbvjw.vercel.app',
//             'https://kv-hram-dev-my-v0-3.vercel.app',
//             'http://localhost:3000', // для локальной разработки
//         ],
//         methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
//         credentials: true,
//         allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
//     });

//     app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
//     app.setGlobalPrefix('api');

//     const port = process.env.PORT || 3001;
//     await app.listen(port);
//     console.log(`Application is running on: http://localhost:${port}`);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedServer: any;

async function createApp() {
    const expressApp = express();
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressApp)
    );

    // ВКЛЮЧАЕМ CORS
    app.enableCors({
        origin: true, // Разрешить все источники (для отладки)
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true,
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    });

    app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
    app.setGlobalPrefix('api');

    await app.init();
    return expressApp;
}

// ✅ ЭКСПОРТ ДЛЯ VERCEL (ОБЯЗАТЕЛЬНО!)
export default async function handler(req: any, res: any) {
    if (!cachedServer) {
        cachedServer = await createApp();
    }
    cachedServer(req, res);
}

// ДЛЯ ЛОКАЛЬНОГО ЗАПУСКА
if (process.env.NODE_ENV !== 'production') {
    createApp().then(app => {
        const port = process.env.PORT || 3001;
        app.listen(port, () => {
            console.log(`✅ Application is running on: http://localhost:${port}`);
        });
    });
}