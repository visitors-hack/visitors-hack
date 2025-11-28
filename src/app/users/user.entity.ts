import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Area } from '../area/area.entity';
import { Cita } from '../cita/cita.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column('text', { array: true, default: ['user'] })
  roles: string[];

  @Column({ type: 'text', nullable: true })
  currentHashedRefreshToken?: string | null;

  @ManyToOne(() => Area, (area) => area.users, { nullable: true })
  area: Area; // <-- NECESARIO!

  @OneToMany(() => Cita, (cita) => cita.user)
  citas: Cita[];
}
