// src/app/dates/cita.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Sala } from '../sala/sala.entity';
import { Area } from '../area/area.entity';
import { User } from '../users/user.entity';
import { Estado } from '../estado/estado.entity';

@Entity()
export class Cita {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  fecha: Date;

  @Column()
  horaCita: string;

  @Column()
  horaIngreso: string;

  @Column()
  horaFin: string;

  @Column('int')
  duracion: number;

  @Column({ nullable: true })
  dni: string;

  @Column({ nullable: true })
  email?: string;

  @Column()
  redirect_invite: string;

  @ManyToOne(() => User, (user) => user.citas, { nullable: false })
  user: User;

  @ManyToOne(() => Sala, (sala) => sala.citas)
  sala: Sala;

  @ManyToOne(() => Area, (area) => area.salas)
  area: Area;

  @ManyToOne(() => Estado)
  estado: Estado;

  @Column({ nullable: true })
  motivo: string;
  
  @Column({ nullable: true })
  empresa: string;
}
