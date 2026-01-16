import { User } from './user.entity';

export abstract class UserRepository {
  abstract create(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  abstract findAll(filters: {
    minAge?: number;
    maxAge?: number;
    page: number;
    limit: number;
  }): Promise<{ users: User[]; total: number }>;
  abstract findById(id: number): Promise<User | null>;
  abstract findByEmail(email: string): Promise<User | null>;
}

export const USER_REPOSITORY = 'USER_REPOSITORY';
