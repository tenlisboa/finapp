import { IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateReportDto {
  @IsISO8601()
  @IsNotEmpty()
  start_date: Date;

  @IsISO8601()
  @IsNotEmpty()
  end_date: Date;
}
