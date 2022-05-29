import { Module } from '@nestjs/common';
import { MembershipService } from './membership.service';
import { MembershipController } from './membership.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembershipRepository } from './membership.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MembershipRepository])],
  controllers: [MembershipController],
  providers: [MembershipService],
})
export class MembershipModule {}
