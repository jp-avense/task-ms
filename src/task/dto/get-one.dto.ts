import { IsString } from 'class-validator';
import BasePayloadDto from './base.dto';

export class GetOneDto extends BasePayloadDto {
  @IsString()
  id: string;
}
