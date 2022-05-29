import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Province } from '../../province/entities/province.entity';

@Entity()
export class LocationArea {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  province_id: number;

  @ManyToOne(() => Province, (province) => province.location_areas)
  province: Province;

  @Column()
  name: string;

  @Column()
  neighborhood: string;

  @Column()
  zone: string;

  @Column()
  location_references: string;

  @Column()
  land_propietary: string;

  @Column()
  contact_land_propietary: string;
}
