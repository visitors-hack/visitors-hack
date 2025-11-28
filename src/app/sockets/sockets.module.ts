import { forwardRef, Module } from '@nestjs/common';
import { SocketsGateway } from './sockets.gateway';
import { SocketService } from './socket.service';
import { CitasModule } from '../cita/citas.module';

@Module({
  imports: [forwardRef(() => CitasModule)],
  providers: [SocketsGateway, SocketService,],
  exports: [SocketsGateway, SocketService],
})
export class SocketsModule {}
