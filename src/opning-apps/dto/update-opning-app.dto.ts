import { PartialType } from '@nestjs/swagger';
import { CreateOpningAppDto } from './create-opning-app.dto';

export class UpdateOpningAppDto extends PartialType(CreateOpningAppDto) {}
