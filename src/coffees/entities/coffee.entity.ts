import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Falvor } from './falvor.entity';

@Entity() // sql table === 'coffee'
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  // @Column('json', { nullable: true })
  @JoinTable()
  @ManyToMany((type) => Falvor, (flavor) => flavor.coffees, { cascade: true })
  // flavors: string[];
  flavors: Falvor[];
}
