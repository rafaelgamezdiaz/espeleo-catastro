import { Injectable } from '@nestjs/common';
import { CreateTypeExcavationDto } from './dto/create-type-excavation.dto';
import { UpdateTypeExcavationDto } from './dto/update-type-excavation.dto';

@Injectable()
export class TypeExcavationService {
  create(createTypeExcavationDto: CreateTypeExcavationDto) {
    return 'This action adds a new typeExcavation';
  }

  findAll() {
    return `This action returns all typeExcavation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeExcavation`;
  }

  update(id: number, updateTypeExcavationDto: UpdateTypeExcavationDto) {
    return `This action updates a #${id} typeExcavation`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeExcavation`;
  }
}
