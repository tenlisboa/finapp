import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionsModule } from './transactions/transactions.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './transactions/entities/transaction.entity';
import { AccountsModule } from './accounts/accounts.module';
import { Account } from './accounts/entities/account.entity';
import { CommonModule } from './common/common.module';
import { AuthModule } from './auth/auth.module';
import { TenantModule } from './tenant/tenant.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: process.env.DB_CONNECTION as any,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT as string),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [Transaction, Account],
      autoLoadModels: true,
      synchronize: true,
      sync: {
        alter: true,
      },
    }),
    TransactionsModule,
    AccountsModule,
    CommonModule,
    AuthModule,
    TenantModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
