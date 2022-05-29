import { Module } from '@nestjs/common';
import { TypeExcavationService } from './type-excavation.service';
import { TypeExcavationController } from './type-excavation.controller';

@Module({
  controllers: [TypeExcavationController],
  providers: [TypeExcavationService],
})
export class TypeExcavationModule {}
