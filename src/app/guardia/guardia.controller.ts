// src/app/dates/dates.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CitasService } from '../cita/dates.service';
import { AutorizeCitaDto, CreateCitaDto } from '../cita/create-cita.dto';
import { GuardiaService } from './guardia.service';



@Controller('guardia')
export class GuardiaController {
  constructor(
    private readonly service: CitasService,
    private readonly guardiaService: GuardiaService
  ) {}

  @Post("generar-cita")
  create(@Body() dto: CreateCitaDto) {
    return this.service.create(dto);
  }

  @Post("autorizar")
  autorice(@Body() dto: AutorizeCitaDto) {
    return this.guardiaService.autorice(dto);
  }

  @Get("ver-agenda")
  findAll() {
    return this.service.findAll();
  }

  @Get('ver-agenda/:id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }
}
