// src/app/dates/dates.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { CitasService } from '../cita/dates.service';
import { CreateCitaDto } from '../cita/create-cita.dto';



@Controller('guardia')
export class GuardiaController {
  constructor(private readonly service: CitasService) {}

  @Post("autorizar")
  create(@Body() dto: CreateCitaDto) {
    return this.service.create(dto);
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
