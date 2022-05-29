import { EntityRepository } from 'typeorm';
import { Cave } from './entities/cave.entity';
import { BaseRepository } from '../../common/base.repository';

@EntityRepository(Cave)
export class CavesRepository extends BaseRepository<any>(Cave) {}