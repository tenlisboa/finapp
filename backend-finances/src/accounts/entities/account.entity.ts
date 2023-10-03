import {
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { ToNumber } from 'src/common/db/to-number.decorator';

@Table({
  tableName: 'accounts',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class Account extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({ allowNull: false })
  name: string;

  @ToNumber
  @Default(0)
  @Column({ type: DataType.DECIMAL(10, 2), allowNull: false })
  balance: number;

  @Column({ allowNull: false })
  subdomain: string;
}
