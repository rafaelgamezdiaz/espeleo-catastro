import { PartialType } from '@nestjs/mapped-types';
import { IsAlpha, IsNumber } from 'class-validator';
import { CreateParameterDto } from './create-parameter.dto';

export class UpdateParameterDto extends PartialType(CreateParameterDto) {
  @IsAlpha()
  param_id: string;

  @IsNumber()
  param_order: number;

  @IsAlpha()
  parameterParamId: string;
}