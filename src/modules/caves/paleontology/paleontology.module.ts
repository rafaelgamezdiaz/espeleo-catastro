import { Module } from '@nestjs/common';
import { PaleontologyService } from './paleontology.service';
import { PaleontologyController } from './paleontology.controller';

@Module({
  controllers: [PaleontologyController],
  providers: [PaleontologyService],
})
export class PaleontologyModule {}
