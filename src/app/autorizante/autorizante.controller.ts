// src/app/dates/dates.controller.ts
import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { CitasService } from '../cita/dates.service';



@Controller('autorizante')
export class AutorizanteController {
  constructor(private readonly service: CitasService) {}

  @Patch("cita/:id")
  updateEstado(
    @Param("id") citaId: string,
    @Body("estadoId") estadoId: string,
  ) {
    return this.service.updateEstado(citaId, estadoId);
  }

}
