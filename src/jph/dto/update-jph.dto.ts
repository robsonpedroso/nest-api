import { PartialType } from '@nestjs/mapped-types';
import { CreateJphDto } from './create-jph.dto';

export class UpdateJphDto extends PartialType(CreateJphDto) {}
