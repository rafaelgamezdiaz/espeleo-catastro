import { Module } from '@nestjs/common';
import { CaveRegisterService } from './cave-register.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CaveRegisterRepository } from './cave-register.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([CaveRegisterRepository]),
  ],
  providers: [CaveRegisterService],
})
export class CaveRegisterModule {}
