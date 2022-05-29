import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { NameOrigin } from '../../../common/name-origin/entities/name-origin.entity';
import { TypeCave } from '../../../common/type-cave/entities/type-cave.entity';
import { CaveCondition } from '../../../common/cave-conditions/entities/cave-condition.entity';
import { StatusTask } from '../../../common/enums/status-task.enum';
import { TopographyMethod } from '../../../common/topography-method/entities/topography-method.entity';
import { Relief } from '../../../common/enums/relief.enum';
import { Geology } from '../geology/entities/geology.entity';
import { Paleontology } from '../paleontology/entities/paleontology.entity';
import { CaveRegister } from '../cave-register/entities/cave-register.entity';

@Entity()
export class Cave {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  code: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  other_names: string;

  @Column()
  name_origin_id: number;

  @ManyToOne(() => NameOrigin, (name_origin) => name_origin.caves)
  name_origin: NameOrigin;

  @OneToMany(() => CaveRegister, (cave_register) => cave_register.cave)
  caves_registers: CaveRegister[];

  @Column({ nullable: true })
  name_origin_other: string;

  @Column()
  type_cave_id: number;

  @ManyToOne(() => TypeCave, (type_cave) => type_cave.caves)
  type_cave: TypeCave;

  @Column()
  cave_conditions_id: number;

  @ManyToOne(() => CaveCondition, (cave_condition) => cave_condition.caves)
  cave_conditions: CaveCondition;

  @Column({ nullable: true })
  cave_conditions_comentaries: string;

  @Column({ default: StatusTask.NONE })
  topography_status: StatusTask;

  @Column({ nullable: true })
  topography_authors: string;

  @Column({ nullable: true })
  topography_dates: string; // Pueden ser varias fechas

  @Column({ nullable: true })
  topographyc_comments: string;

  @Column({ default: StatusTask.NONE })
  cartography_status: StatusTask;

  @Column({ nullable: true })
  cartography_authors: string;

  @Column({ nullable: true })
  cartography_dates: string; // Pueden ser varias fechas

  @Column({ nullable: true })
  cartography_comments: string;

  @Column()
  topography_method_id: number;

  @ManyToOne(
    () => TopographyMethod,
    (topography_method) => topography_method.caves,
  )
  topography_method: TopographyMethod;

  @Column({ nullable: true })
  main_entrance_name: string;

  @Column({ nullable: true })
  main_entrance_height: number;

  @Column({ nullable: true })
  main_entrance_witdh: number;

  @Column({ default: Relief.OTHER })
  main_entrance_relief: Relief;

  @Column({ nullable: true })
  main_entrance_relieve_other: string;

  @Column({ default: false })
  rope_required: boolean;

  @Column({ default: 1 })
  levels_quantity: number;

  @Column({ nullable: true })
  levels_comments: string;

  @Column({ default: 0 })
  additional_entrances: number;

  @Column({ nullable: true })
  main_gallery_name: string;

  @Column({ nullable: true })
  main_gallery_length: number;

  @Column({ nullable: true })
  main_gallery_height: number;

  @Column({ nullable: true })
  main_gallery_width: number;

  @Column({ nullable: true })
  surface_area: number;

  @Column({ nullable: true })
  extention_registered: number;

  @Column({ nullable: true })
  total_slope: number;

  @Column({ nullable: true })
  mean_width_rock_over_cave: number;

  @Column({ default: 0 })
  dangerous_landslides: number; // Derrumbes peligrosos

  @Column({ nullable: true })
  landslides_location: string;

  @Column({ nullable: true })
  landslides_reference_stations: string;

  @OneToOne(() => Geology, (geology) => geology.cave)
  geology?: Geology;

  @OneToOne(() => Paleontology, (paleontology) => paleontology.cave)
  paleontology?: Geology;

  // Each Cave is registered by one user (but une user can register many caves)
  @Column()
  createdBy: number;

  // Each Cave is registered by one user (but une user can register many caves)
  @Column()
  updatedBy: number;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
