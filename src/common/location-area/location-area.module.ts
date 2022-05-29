import { Module } from '@nestjs/common';
import { LocationAreaService } from './location-area.service';
import { LocationAreaController } from './location-area.controller';

@Module({
  controllers: [LocationAreaController],
  providers: [LocationAreaService]
})
export class LocationAreaModule {}
