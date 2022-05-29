import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationAreaDto } from './create-location-area.dto';

export class UpdateLocationAreaDto extends PartialType(CreateLocationAreaDto) {}
