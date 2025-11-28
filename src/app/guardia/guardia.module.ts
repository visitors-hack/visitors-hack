import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from '../area/area.module';
import { GuardiaController } from './guardia.controller';
import { Cita } from '../cita/cita.entity';
import { CitasModule } from '../cita/citas.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Cita]),
    AreaModule,
    CitasModule, // <- LOS MÓDULOS VAN EN IMPORTS
  ],
  controllers: [GuardiaController],
  providers: [], // <- ACÁ VAN LOS SERVICES DEL MÓDULO
})
export class GuardiaModule {}
