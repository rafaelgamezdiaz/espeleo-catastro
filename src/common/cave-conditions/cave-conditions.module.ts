import { Module } from '@nestjs/common';
import { CaveConditionsService } from './cave-conditions.service';
import { CaveConditionsController } from './cave-conditions.controller';

@Module({
  controllers: [CaveConditionsController],
  providers: [CaveConditionsService]
})
export class CaveConditionsModule {}
