import { Inject, Injectable } from '@nestjs/common';
import { User } from '../../domain/users/user.entity';
import * as userRepository from 'src/domain/users/user.repository';

@Injectable()
export class ListUsersUseCase {
  constructor(
    @Inject(userRepository.USER_REPOSITORY)
    private readonly userRepository: userRepository.UserRepository,
  ) {}

  async execute(filters: {
    minAge?: number;
    maxAge?: number;
    page: number;
    limit: number;
  }): Promise<{ users: User[]; total: number }> {
    return this.userRepository.findAll(filters);
  }
}
