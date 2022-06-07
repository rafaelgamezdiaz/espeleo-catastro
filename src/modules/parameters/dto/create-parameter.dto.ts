import { IsAlpha, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateParameterDto {
  @IsNotEmpty()
  @IsAlpha()
  param_id: string;

  @IsNumber()
  param_order: number;

  @IsAlpha()
  parameterParamId: string;
}
