import { Module } from '@nestjs/common';
import { ProvinceService } from './province.service';
import { ProvinceController } from './province.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvinceRepository } from './province.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProvinceRepository])],
  controllers: [ProvinceController],
  providers: [ProvinceService],
})
export class ProvinceModule {}
