import { ReportStatus } from '../entities/report.entity';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class UpdateReportDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  file_url: string;

  @IsEnum(ReportStatus)
  @IsNotEmpty()
  status: ReportStatus;
}
