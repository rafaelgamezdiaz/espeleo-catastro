import { PartialType } from '@nestjs/mapped-types';
import { CreateOrigenNombreCuevaDto } from './create-origen-nombre-cueva.dto';

export class UpdateOrigenNombreCuevaDto extends PartialType(CreateOrigenNombreCuevaDto) {}
