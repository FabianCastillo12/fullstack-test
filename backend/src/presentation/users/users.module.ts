import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from '../../application/users/create-user.use-case';
import { ListUsersUseCase } from '../../application/users/list-users.use-case';
import { TypeOrmUserRepository } from '../../infrastructure/users/user.typeorm.repository';
import { USER_REPOSITORY } from '../../domain/users/user.repository';
import { UserEntity } from '../../infrastructure/users/user.entity.orm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    ListUsersUseCase,
    {
      provide: USER_REPOSITORY,
      useClass: TypeOrmUserRepository,
    },
  ],
})
export class UsersModule {}
