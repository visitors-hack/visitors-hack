
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Estado {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  descripcion: string;
}
