import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '@app/core/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.service1',
      isGlobal: true,
    }),
    PrismaModule,
    SpotsModule,
    EventsModule,
  ],
})
export class Service1Module {}
