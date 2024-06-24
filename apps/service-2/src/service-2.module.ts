import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SpotsModule } from './spots/spots.module';
import { EventsModule } from './events/events.module';
import { PrismaModule } from '@app/core/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.service2',
      isGlobal: true,
    }),
    PrismaModule,
    SpotsModule,
    EventsModule,
  ],
})
export class Service2Module {}
