import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { LocationArea } from '../../location-area/entities/location-area.entity';

@Entity()
export class Province {
  constructor(partial: Partial<Province>) {
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => LocationArea, (location_area) => location_area.province)
  location_areas?: LocationArea[];

  @Column({ unique: true })
  name: string;

  @Column({ default: true })
  active: boolean;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ type: 'timestamptz', nullable: true })
  deletedAt: Date;
}
