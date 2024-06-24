import { Global, Module } from '@nestjs/common';
import { PrismaCoreService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaCoreService],
  exports: [PrismaCoreService],
})
export class PrismaModule {}
