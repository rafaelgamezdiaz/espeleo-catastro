import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cave } from '../../entities/cave.entity';
import { Orientation } from '../../../../common/enums/orientation.enum';

@Entity()
export class Geology {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cave_id: number;

  @OneToOne(() => Cave, (cave) => cave.geology)
  cave: Cave;

  @Column({ nullable: true })
  rock: string;

  @Column({ nullable: true })
  formation: string;

  // Busamiento de estratos
  @Column({ nullable: true })
  strata_slope: number; // en grados

  @Column({ nullable: true })
  strata_slope_orientation: Orientation; // en grados

  @Column({ nullable: true })
  geological_era: string;

  @Column({ nullable: true })
  geological_period: string;

  @Column({ nullable: true })
  geological_epoque: string;

  @Column({ nullable: true })
  geological_time: string;

  @Column()
  createdBy: number;

  @Column()
  updatedBy: number;

  @Column({ type: 'timestamptz', nullable: true })
  createdAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
