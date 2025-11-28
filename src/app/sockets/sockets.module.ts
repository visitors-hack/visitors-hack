import { Module } from '@nestjs/common';
import { SocketsGateway } from './sockets.gateway';
import { SocketService } from './socket.service';

@Module({
  providers: [SocketsGateway, SocketService],
  exports: [SocketsGateway, SocketService],
})
export class SocketsModule {}
