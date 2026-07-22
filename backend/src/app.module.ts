// для базы данных с Docker
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { ConfigModule } from '@nestjs/config';
// import { AuthModule } from './auth/auth.module';
// import { EventsModule } from './events/events.module';

// @Module({
//     imports: [
//         ConfigModule.forRoot({ isGlobal: true }),
//         MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/tz-admin'),
//         AuthModule,
//         EventsModule,
//     ],
// })
// export class AppModule { }

// Подключаем MongoDB Atlas
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { EventsModule } from './events/events.module';
import { AppController } from './app.controller';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: process.env.NODE_ENV === 'production'
                ? '.env.production'
                : '.env',
        }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('MONGODB_URI'),
            }),
            inject: [ConfigService],
        }),
        AuthModule,
        EventsModule,
    ],
    controllers: [AppController],
})
export class AppModule { }