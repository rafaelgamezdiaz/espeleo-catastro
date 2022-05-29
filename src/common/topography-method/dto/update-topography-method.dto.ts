import { PartialType } from '@nestjs/mapped-types';
import { CreateTopographyMethodDto } from './create-topography-method.dto';

export class UpdateTopographyMethodDto extends PartialType(CreateTopographyMethodDto) {}
