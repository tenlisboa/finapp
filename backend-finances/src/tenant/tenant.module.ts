import { Global, Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from 'src/accounts/entities/account.entity';

@Global()
@Module({
  imports: [SequelizeModule.forFeature([Account])],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}
