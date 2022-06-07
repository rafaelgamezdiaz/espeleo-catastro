import { Module } from '@nestjs/common';
import { OrigenNombreCuevaService } from './origen-nombre-cueva.service';
import { OrigenNombreCuevaController } from './origen-nombre-cueva.controller';

@Module({
  controllers: [OrigenNombreCuevaController],
  providers: [OrigenNombreCuevaService],
})
export class OrigenNombreCuevaModule {}
