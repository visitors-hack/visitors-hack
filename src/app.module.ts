import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrModule } from './app/qr/qr.module'; // si lo tenés

import { AuthModule } from './app/auth/auth.module';
import { UsersModule } from './app/users/users.module';
import { User } from './app/users/user.entity';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './app/database/database.module';
import { QrService } from './app/qr/qr.service';

import { AreaModule } from './app/area/area.module';
import { CitasModule } from './app/cita/citas.module';
import { QrController } from './app/qr/qr.controller';
import { EmailModule } from './app/email/email.module';
import { GuardiaModule } from './app/guardia/guardia.module';
import { AutorizanteModule } from './app/autorizante/autorizante.module';

dotenv.config();

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    AuthModule,
    QrModule,
    CitasModule,
    EmailModule,
    AreaModule,
    GuardiaModule,
    AutorizanteModule
  ],
  controllers: [QrController],
  providers: [QrService],
})
export class AppModule {}
