import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Account } from 'src/accounts/entities/account.entity';
import { ToNumber } from 'src/common/db/to-number.decorator';

export enum TransactionCategory {
  CATEGORY1 = 'CATEGORY1',
  CATEGORY2 = 'CATEGORY2',
}

export enum TransactionType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
}

@Table({
  tableName: 'transactions',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Transaction extends Model {
  @PrimaryKey
  @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
  id: string;

  @Column({ allowNull: false })
  payment_date: Date;

  @Column({ allowNull: false })
  name: string;

  @Column({ allowNull: false })
  description: string;

  @Column({ allowNull: false })
  category: TransactionCategory;

  @ToNumber
  @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
  amount: number;

  @Column({ allowNull: false })
  type: TransactionType;

  @ForeignKey(() => Account)
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  account_id: string;

  @BelongsTo(() => Account)
  account: Account;
}
