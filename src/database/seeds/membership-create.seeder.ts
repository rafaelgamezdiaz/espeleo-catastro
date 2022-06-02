import { Factory, Seeder } from 'typeorm-seeding';
import { Connection, getManager } from 'typeorm';
import { Membership } from '../../common/membership/entities/membership.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { MembershipRepository } from '../../common/membership/membership.repository';

export class MembershipCreateSeeder implements Seeder {
  constructor(
    @InjectRepository(MembershipRepository)
    private membershipRepository: MembershipRepository,
  ) {}

  public async run(factory: Factory, connection: Connection): Promise<void> {
    // Clean Table
    await getManager().query('TRUNCATE membership');

    const memberchips = [
      'Miembro Ordinario',
      'Miembro Honorifico',
      'Aspirante',
    ];
    for (const index in memberchips) {
      await factory(Membership)().create({ name: memberchips[index] });
    }
  }
}