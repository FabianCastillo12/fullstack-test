import { Inject, Injectable, ConflictException } from '@nestjs/common';
import { User } from '../../domain/users/user.entity';
import {
  UserRepository,
  USER_REPOSITORY,
} from '../../domain/users/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(data: {
    name: string;
    email: string;
    age: number;
  }): Promise<User> {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new ConflictException('El email ya está registrado');
    }

    return this.userRepository.create(data);
  }
}
