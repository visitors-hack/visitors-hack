import { Injectable, NotFoundException } from '@nestjs/common';


import { QrService } from 'src/app/qr/qr.service';
import { AreaService } from '../area/area.service';
import { SocketService } from '../sockets/socket.service';
import { Cita } from '../cita/cita.entity';
import { AutorizeCitaDto } from '../cita/create-cita.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GuardiaService {
  constructor(
    private readonly socketService: SocketService,
    @InjectRepository(Cita)
    private citaRepository: Repository<Cita>,
    

  ) { }

  async autorice(dto: AutorizeCitaDto ): Promise<any> {

    const cita = await this.citaRepository.findOne({ where: { id: dto.citaId } });

    if (!cita) {
      throw new NotFoundException('Cita no encontrada');
    }

    this.socketService.sendToUser(dto.userId, 'cita_esperando', {
      cita: {
        userId: cita.id,
        nombre: cita.nombre

      } 
    });

    return { message: 'Cita autorizada'  };
  }

}
