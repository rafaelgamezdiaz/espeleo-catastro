import { Injectable } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Membership } from './entities/membership.entity';
import { Repository } from "typeorm";
import { MembershipRepository } from "./membership.repository";

@Injectable()
export class MembershipService {

  constructor(@InjectRepository(MembershipRepository) private membershipRepository: MembershipRepository ) {
  }

  async create(createMembershipDto: CreateMembershipDto): Promise<Membership> {
    return await this.membershipRepository.save(createMembershipDto);
  }

  async findAll() {
    return await this.membershipRepository.find();
  }

  async findOne(id: number) {
    return await this.membershipRepository.findByIds([id]);
  }

  async update(id: number, updateMembershipDto: UpdateMembershipDto) {
    return await this.membershipRepository.update({ id }, updateMembershipDto);
  }

  async remove(id: number) {
    return await this.membershipRepository.delete(id);
  }
}
