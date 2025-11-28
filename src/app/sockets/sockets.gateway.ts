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

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SocketsGateway
  implements OnGatewayConnection, OnGatewayDisconnect {
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
    // reenviar a todos
    this.server.emit('mensaje', data);
    return { status: 'ok' };
  }

  sendToUser(userId: string, event: string, payload: any) {
    this.server.to(`user_${userId}`).emit(event, payload);
  }
}
