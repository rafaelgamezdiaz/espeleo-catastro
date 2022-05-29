import { Injectable } from '@nestjs/common';
import { CreateCaveDto } from './dto/create-cave.dto';
import { UpdateCaveDto } from './dto/update-cave.dto';

@Injectable()
export class CavesService {
  create(createCaveDto: CreateCaveDto) {
    return 'This action adds a new cave';
  }

  findAll() {
    return `This action returns all caves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cave`;
  }

  update(id: number, updateCaveDto: UpdateCaveDto) {
    return `This action updates a #${id} cave`;
  }

  remove(id: number) {
    return `This action removes a #${id} cave`;
  }
}
