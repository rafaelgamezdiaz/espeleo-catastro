import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Paleontology } from '../../../modules/caves/paleontology/entities/paleontology.entity';

@Entity()
export class TypeExcavation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Paleontology, (paleontology) => paleontology.type_excavation)
  paleontology?: Paleontology[];
}
