import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeExcavationDto } from './create-type-excavation.dto';

export class UpdateTypeExcavationDto extends PartialType(CreateTypeExcavationDto) {}
