import { PartialType } from '@nestjs/mapped-types';
import { CreateGeologyDto } from './create-geology.dto';

export class UpdateGeologyDto extends PartialType(CreateGeologyDto) {}
