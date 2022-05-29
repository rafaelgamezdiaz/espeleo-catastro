import { PartialType } from '@nestjs/mapped-types';
import { CreateTypeCaveDto } from './create-type-cave.dto';

export class UpdateTypeCaveDto extends PartialType(CreateTypeCaveDto) {}
