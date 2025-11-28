import { Injectable } from '@nestjs/common';
import { SocketsGateway } from './sockets.gateway';

@Injectable()
export class SocketService {
  constructor(private readonly eventsGateway: SocketsGateway) {}

  sendToUser(userId: string, event: string, payload: any) {
    console.log(`Sending event ${event} to user ${userId} with payload:`, payload);
    this.eventsGateway.sendToUser(userId, event, payload);
  }
}
