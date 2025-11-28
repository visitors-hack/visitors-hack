import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CitasService } from '../cita/dates.service';


@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
  constructor(private readonly citasService: CitasService) {}
  @WebSocketServer()
  server: Server;

  // Cliente conectado
  handleConnection(client: Socket) {
    console.log(`Cliente conectado: ${client.id}`);
  }

  // Cliente desconectado
  handleDisconnect(client: Socket) {
    console.log(`Cliente desconectado: ${client.id}`);
  }

  // Escuchar eventos
  @SubscribeMessage('mensaje')
  handleMessage(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log('Mensaje recibido', data);
    this.citasService.updateEstado(data.cita, data.estado)
    // reenviar a todos
    this.server.emit('mensaje', data);
    this.server.emit(data.cita, "cita actualizada");
    return { status: 'ok' };
  }

  sendToUser(userId: string, event: string, payload: any) {
    this.server.to(`user_${userId}`).emit(event, payload);
  }
}
