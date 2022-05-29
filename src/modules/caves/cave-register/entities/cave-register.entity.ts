import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../../users/entities/user.entity';
//import { JoinColumn } from 'typeorm/browser';
import { Cave } from '../../entities/cave.entity';

@Entity()
export class CaveRegister {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.caves_registers)
 // @JoinColumn({ name: 'id_user' })
  user: User;

  @ManyToOne(() => Cave, (cave) => cave.caves_registers)
  //@JoinColumn({ name: 'id_cave' })
  cave: Cave;

  @Column({ nullable: true })
  groups_colaborate: string;

  @Column({ nullable: true })
  peoples_colaborate: string;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
