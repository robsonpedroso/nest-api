import { Module } from '@nestjs/common';
import { JphService } from './jph.service';
import { JphController } from './jph.controller';
import { HttpModule } from '@nestjs/common';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [JphController],
  providers: [JphService]
})
export class JphModule {}
