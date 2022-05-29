import { EntityRepository } from 'typeorm';
import { Province } from './entities/province.entity';
import { BaseRepository } from '../base.repository';

@EntityRepository(Province)
export class ProvinceRepository extends BaseRepository<any>(Province) {}