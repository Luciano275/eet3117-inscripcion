import { Module } from '@nestjs/common';
import { PadronModule } from './padron/padron.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [configuration]
    }),
    PadronModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
