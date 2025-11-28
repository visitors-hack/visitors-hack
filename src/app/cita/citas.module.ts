import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './cita.entity';
import { CitasController } from './dates.controller';
import { CitasService } from './dates.service';
import { QrService } from 'src/app/qr/qr.service';
import { AreaModule } from '../area/area.module';
import { Estado } from '../estado/estado.entity';
import { SocketsModule } from '../sockets/sockets.module';
import { EstadoService } from '../estado/estado.service';


@Module({
  imports: [TypeOrmModule.forFeature([Cita, Estado]),
    AreaModule,SocketsModule],
  controllers: [CitasController],


  providers: [CitasService, QrService, EstadoService],
   exports: [CitasService],
})
export class CitasModule { }
