import { PartialType } from '@nestjs/mapped-types';
import { CreateCaveConditionDto } from './create-cave-condition.dto';

export class UpdateCaveConditionDto extends PartialType(CreateCaveConditionDto) {}
