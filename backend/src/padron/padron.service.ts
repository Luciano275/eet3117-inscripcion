import { PrismaService } from 'src/prisma/prisma.service';
import { QueryDto } from './dto/queries.dto';

import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class PadronService {

  private LIMIT = 100;

  constructor(
    private readonly db: PrismaService
  ) {}

  async run() {
    const data = JSON.parse(readFileSync(join(process.cwd(), 'src/seed/padron_educativo.json'), 'utf-8'))

    const chunkSize = 100;

    for (let i = 0; i < data.length; i+=chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      await this.db.padron.createMany({
        data: [...chunk.map((establecimiento) => ({
          ...establecimiento,
          codigoJurisdiccional: establecimiento.codigoJurisdiccional.toString()
        }))],
        skipDuplicates: true
      })
    }

    return true;
  }

  async getAll(
    query: QueryDto
  ) {
    const padrones = await this.getByCursor(query)

    return {
      cursor: padrones.length ? padrones[padrones.length-1].id : null,
      length: padrones.length,
      padrones,
    };
  }

  private async getByCursor({ cursor, nombre }: QueryDto) {
    const where = {
      OR: [
        {
          nombreEstablecimiento: {
            contains: nombre || '',
            mode: 'insensitive'
          },
        },
        {
          codigoJurisdiccional: {
            contains: nombre || '',
            mode: 'insensitive'
          }
        }
      ]
    }
    
    const options: any = {
      where,
      take: this.LIMIT
    }

    if (cursor) {
      options.skip = 1;
      options.cursor = {
        id: cursor
      }
    }

    return await this.db.padron.findMany(options);
  }

}
