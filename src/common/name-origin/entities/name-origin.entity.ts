import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cave } from '../../../modules/caves/entities/cave.entity';

@Entity()
export class NameOrigin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cave, (cave) => cave.name_origin)
  caves?: Cave[];
}
