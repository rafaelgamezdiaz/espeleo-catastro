import { PartialType } from '@nestjs/mapped-types';
import { CreatePaleontologyDto } from './create-paleontology.dto';

export class UpdatePaleontologyDto extends PartialType(CreatePaleontologyDto) {}
