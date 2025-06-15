import { Controller, Get, InternalServerErrorException, Post, Query } from '@nestjs/common';
import { PadronService } from './padron.service';
import { QueryDto } from './dto/queries.dto';

@Controller('padron')
export class PadronController {
  constructor(private readonly padronService: PadronService) {}

  // @Post()
  // async runSeed() {
  //   try {
  //     await this.padronService.run();

  //     return {
  //       message: 'Datos insertados correctamente.'
  //     }
  //   }catch (e) {
  //     console.error(e);
  //     throw new InternalServerErrorException(e.message || e.error || "Internal Server Error")
  //   }
  // }

  @Get()
  async getInstitute(
    @Query() queries: QueryDto
  ) {
    try {
      const padrones = await this.padronService.getAll(queries);

      return padrones
    }catch (e) {
      console.error(e);
      throw new InternalServerErrorException(e.message || e.error || "Internal Server Error")
    }
  }
}