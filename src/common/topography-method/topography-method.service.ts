import { Injectable } from '@nestjs/common';
import { CreateTopographyMethodDto } from './dto/create-topography-method.dto';
import { UpdateTopographyMethodDto } from './dto/update-topography-method.dto';

@Injectable()
export class TopographyMethodService {
  create(createTopographyMethodDto: CreateTopographyMethodDto) {
    return 'This action adds a new topographyMethod';
  }

  findAll() {
    return `This action returns all topographyMethod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} topographyMethod`;
  }

  update(id: number, updateTopographyMethodDto: UpdateTopographyMethodDto) {
    return `This action updates a #${id} topographyMethod`;
  }

  remove(id: number) {
    return `This action removes a #${id} topographyMethod`;
  }
}
