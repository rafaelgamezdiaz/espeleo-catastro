import { Module } from '@nestjs/common';
import { GeologyService } from './geology.service';
import { GeologyController } from './geology.controller';

@Module({
  controllers: [GeologyController],
  providers: [GeologyService]
})
export class GeologyModule {}
