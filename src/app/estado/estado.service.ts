// src/app/estado/estado.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estado } from './estado.entity';

@Injectable()
export class EstadoService {
  constructor(
    @InjectRepository(Estado)
    private readonly estadoRepository: Repository<Estado>,
  ) {}

  async findAll(): Promise<Estado[]> {
    return this.estadoRepository.find();
  }

  async findOne(id: string): Promise<Estado> {
    const estado = await this.estadoRepository.findOne({ where: { id } });

    if (!estado) {
      throw new NotFoundException(`Estado con id ${id} no encontrado`);
    }

    return estado;
  }

  async findByDescripcion(descripcion: string): Promise<Estado> {
    const estado = await this.estadoRepository.findOne({
      where: { descripcion },
    });

    if (!estado) {
      throw new NotFoundException(
        `Estado con descripcion '${descripcion}' no encontrado`,
      );
    }

    return estado;
  }

  async create(descripcion: string): Promise<Estado> {
    const nuevo = this.estadoRepository.create({ descripcion });
    return await this.estadoRepository.save(nuevo);
  }
}
