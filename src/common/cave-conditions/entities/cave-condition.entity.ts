import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cave } from "../../../modules/caves/entities/cave.entity";

@Entity()
export class CaveCondition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cave, (cave) => cave.cave_conditions)
  caves?: Cave[];
}
