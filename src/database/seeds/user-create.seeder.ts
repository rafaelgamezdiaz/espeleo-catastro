import { Factory, Seeder } from 'typeorm-seeding';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from '../../modules/users/users.repository';
import { User } from '../../modules/users/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Connection, getManager } from 'typeorm';

export class UserCreateSeeder implements Seeder {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  public async run(factory: Factory, connection: Connection): Promise<void> {
    //await getManager().query('TRUNCATE user');

    const users = [
      {
        email: 'usuario@catastro.com',
        password: '111111',
        role: 'USER',
      },
      {
        email: 'admin@catastro.com',
        password: '111111',
        role: 'ADMIN',
      },
    ];
    for (const index in users) {
      const password = await bcrypt.hash(users[index].password, 10);
      await factory(User)().create({
        email: users[index].email,
        password: password,
        role: users[index].role,
      });
    }

    //return Promise.resolve(undefined);
  }

}