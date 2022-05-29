import { EntityRepository } from 'typeorm';
import { CaveRegister } from './entities/cave-register.entity';
import { BaseRepository } from '../../../common/base.repository';
import { Cave } from '../entities/cave.entity';

@EntityRepository(CaveRegister)
export class CaveRegisterRepository extends BaseRepository<any>(Cave) {}
