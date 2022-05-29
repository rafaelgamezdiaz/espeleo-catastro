import { Injectable } from '@nestjs/common';
import { CreatePaleontologyDto } from './dto/create-paleontology.dto';
import { UpdatePaleontologyDto } from './dto/update-paleontology.dto';

@Injectable()
export class PaleontologyService {
  create(createPaleontologyDto: CreatePaleontologyDto) {
    return 'This action adds a new paleontology';
  }

  findAll() {
    return `This action returns all paleontology`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paleontology`;
  }

  update(id: number, updatePaleontologyDto: UpdatePaleontologyDto) {
    return `This action updates a #${id} paleontology`;
  }

  remove(id: number) {
    return `This action removes a #${id} paleontology`;
  }
}
