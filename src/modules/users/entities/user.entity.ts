import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UsersStatus } from '../enums/users-status.enum';
import { Role } from '../enums/roles.enum';
import { Exclude } from 'class-transformer';
import { CaveRegister } from '../../caves/cave-register/entities/cave-register.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CaveRegister, (cave_register) => cave_register.user)
  caves_registers: CaveRegister[];

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  surname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  gender: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  age: number;

  // @Column({ nullable: true })
  // membership_id: number;

  // @ManyToOne(() => Membership, (membership) => membership.users)
  // membership: Membership;

  @Column({ nullable: true })
  group: string; // speleological group

  @Column({ default: Role.USER })
  role: string;

  @Column({ default: UsersStatus.ACTIVE })
  status: UsersStatus;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
