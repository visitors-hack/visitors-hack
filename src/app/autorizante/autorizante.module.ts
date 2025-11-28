import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from '../area/area.module';
import { Cita } from '../cita/cita.entity';
import { CitasModule } from '../cita/citas.module';
import { AutorizanteController } from './autorizante.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Cita]),
    AreaModule,
    CitasModule
  ],
  controllers: [AutorizanteController],
  providers: [],
})
export class AutorizanteModule {}