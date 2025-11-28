import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaModule } from '../area/area.module';
import { GuardiaController } from './guardia.controller';
import { Cita } from '../cita/cita.entity';
import { CitasModule } from '../cita/citas.module';
import { GuardiaService } from './guardia.service';
import { SocketService } from '../sockets/socket.service';
import { SocketsModule } from '../sockets/sockets.module';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/user.service';
import { User } from '../users/user.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Cita, User]),
    AreaModule,
    CitasModule, // <- LOS MÓDULOS VAN EN IMPORTS
    SocketsModule,
    UsersModule,
    
  ],
  controllers: [GuardiaController],
  providers: [GuardiaService, SocketService, UsersService], // <- ACÁ VAN LOS SERVICES DEL MÓDULO
  
})
export class GuardiaModule {}
