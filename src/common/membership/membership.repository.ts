import { EntityRepository } from 'typeorm';
import { BaseRepository } from '../base.repository';
import { Membership } from './entities/membership.entity';

@EntityRepository(Membership)
export class MembershipRepository extends BaseRepository<any>(Membership) {}