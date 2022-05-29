import { Module } from '@nestjs/common';
import { NameOriginService } from './name-origin.service';
import { NameOriginController } from './name-origin.controller';

@Module({
  controllers: [NameOriginController],
  providers: [NameOriginService]
})
export class NameOriginModule {}
