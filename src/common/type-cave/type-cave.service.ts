import { Injectable } from '@nestjs/common';
import { CreateTypeCaveDto } from './dto/create-type-cave.dto';
import { UpdateTypeCaveDto } from './dto/update-type-cave.dto';

@Injectable()
export class TypeCaveService {
  create(createTypeCaveDto: CreateTypeCaveDto) {
    return 'This action adds a new typeCave';
  }

  findAll() {
    return `This action returns all typeCave`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeCave`;
  }

  update(id: number, updateTypeCaveDto: UpdateTypeCaveDto) {
    return `This action updates a #${id} typeCave`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeCave`;
  }
}
