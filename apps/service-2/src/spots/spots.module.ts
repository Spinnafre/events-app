import { Module } from '@nestjs/common';
import { SpotsService } from '../../../../libs/core/src/spots/spots.service';
import { SpotsController } from './spots.controller';

@Module({
  controllers: [SpotsController],
  providers: [SpotsService],
})
export class SpotsModule {}
