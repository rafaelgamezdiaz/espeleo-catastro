import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class Parameter extends BaseEntity {
  @PrimaryColumn()
  param_id: string;

  // @Column({ nullable: true })
  // param_parent_id: string;

  @Column()
  param_order: number;

  @Column({ nullable: true })
  param_name: string;

  @ManyToOne((type) => Parameter, (parameter) => parameter.childParameters)
  parentParameter: string;

  @OneToMany((type) => Parameter, (parameter) => parameter.parentParameter)
  childParameters: Parameter[];
}