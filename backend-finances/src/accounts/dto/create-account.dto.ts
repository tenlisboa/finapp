import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAccountDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  subdomain: string;
}
