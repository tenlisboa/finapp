import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import {
  TransactionCategory,
  TransactionType,
} from '../entities/transaction.entity';

export class CreateTransactionDto {
  @IsISO8601()
  @IsNotEmpty()
  payment_date: Date;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;

  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsEnum(TransactionCategory)
  category: TransactionCategory;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: TransactionType;
}
