import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cave } from "../../../modules/caves/entities/cave.entity";

@Entity()
export class TypeCave {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cave, (cave) => cave.type_cave)
  caves?: Cave[];
}
