import { Injectable } from '@nestjs/common';
import { CreateCaveConditionDto } from './dto/create-cave-condition.dto';
import { UpdateCaveConditionDto } from './dto/update-cave-condition.dto';

@Injectable()
export class CaveConditionsService {
  create(createCaveConditionDto: CreateCaveConditionDto) {
    return 'This action adds a new caveCondition';
  }

  findAll() {
    return `This action returns all caveConditions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} caveCondition`;
  }

  update(id: number, updateCaveConditionDto: UpdateCaveConditionDto) {
    return `This action updates a #${id} caveCondition`;
  }

  remove(id: number) {
    return `This action removes a #${id} caveCondition`;
  }
}
