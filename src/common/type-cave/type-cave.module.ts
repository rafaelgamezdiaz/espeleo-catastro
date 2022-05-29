import { Module } from '@nestjs/common';
import { TypeCaveService } from './type-cave.service';
import { TypeCaveController } from './type-cave.controller';

@Module({
  controllers: [TypeCaveController],
  providers: [TypeCaveService]
})
export class TypeCaveModule {}
