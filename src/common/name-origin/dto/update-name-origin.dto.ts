import { PartialType } from '@nestjs/mapped-types';
import { CreateNameOriginDto } from './create-name-origin.dto';

export class UpdateNameOriginDto extends PartialType(CreateNameOriginDto) {}
