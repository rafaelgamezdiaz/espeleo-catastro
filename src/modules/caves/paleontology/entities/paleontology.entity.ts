import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cave } from '../../entities/cave.entity';
import { TypeExcavation } from '../../../../common/type-excavation/entities/type-excavation.entity';

@Entity()
export class Paleontology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cave_id: number;

  @OneToOne(() => Cave, (cave) => cave.paleontology)
  cave: Cave;

  @Column()
  type_excavation_id: number;

  @ManyToOne(
    () => TypeExcavation,
    (type_excavation) => type_excavation.paleontology,
  )
  type_excavation: TypeExcavation;

  @Column({ nullable: true })
  excavation_other: string;

  @Column()
  collected_material: boolean;

  @Column()
  collected_material_destiny: string;

  @Column()
  has_fosils: boolean;

  @Column()
  has_fosils_reference_station: string;

  @Column({ default: 0 })
  pictographs_quantity: number;

  @Column()
  pictographs_location: string;

  @Column({ default: 0 })
  bones_quantity: number;

  @Column()
  bones_location: string;

  @Column({ nullable: true })
  found_material_comments: string;

  @Column({ nullable: true })
  mites: string;

  @Column({ nullable: true })
  comments: string;
}
