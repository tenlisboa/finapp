import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountsService {
  constructor(
    @InjectModel(Account)
    private accountModel: typeof Account,
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountModel.create(createAccountDto as any);
  }

  findAll() {
    return this.accountModel.findAll();
  }

  findOne(id: number) {
    return this.accountModel.findByPk(id, {
      rejectOnEmpty: true,
    });
  }
}
