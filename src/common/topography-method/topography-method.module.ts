import { Module } from '@nestjs/common';
import { TopographyMethodService } from './topography-method.service';
import { TopographyMethodController } from './topography-method.controller';

@Module({
  controllers: [TopographyMethodController],
  providers: [TopographyMethodService]
})
export class TopographyMethodModule {}
