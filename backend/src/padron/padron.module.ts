import { Module } from '@nestjs/common';
import { PadronService } from './padron.service';
import { PadronController } from './padron.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PadronController],
  providers: [PadronService, PrismaService],
})
export class PadronModule {}
