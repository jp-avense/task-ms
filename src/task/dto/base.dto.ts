import { IsString } from 'class-validator';

export default class BasePayloadDto {
  @IsString()
  tenantName: string;
}
