import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cave } from "../../../modules/caves/entities/cave.entity";

@Entity()
export class TopographyMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Cave, (cave) => cave.topography_method)
  caves?: Cave[];
}
