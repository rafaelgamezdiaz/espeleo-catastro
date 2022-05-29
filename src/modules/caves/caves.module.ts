import { Module } from '@nestjs/common';
import { CavesService } from './caves.service';
import { CavesController } from './caves.controller';
import { GeologyModule } from './geology/geology.module';
import { PaleontologyModule } from './paleontology/paleontology.module';
import { CaveRegisterModule } from './cave-register/cave-register.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CavesRepository } from './caves.repository';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CavesRepository]),
    CaveRegisterModule,
    GeologyModule,
    PaleontologyModule,
  ],
  controllers: [CavesController],
  providers: [CavesService],
})
export class CavesModule {}
