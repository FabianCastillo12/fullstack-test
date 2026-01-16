import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThanOrEqual, LessThanOrEqual } from 'typeorm';
import { User } from '../../domain/users/user.entity';
import { UserRepository } from '../../domain/users/user.repository';
import { UserEntity } from './user.entity.orm';

@Injectable()
export class TypeOrmUserRepository extends UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repo: Repository<UserEntity>,
  ) {
    super();
  }

  async create(data: Omit<User, 'id' | 'createdAt'>): Promise<User> {
    const entity = this.repo.create(data);
    const saved = await this.repo.save(entity);
    return this.toUser(saved);
  }

  async findAll(filters: {
    minAge?: number;
    maxAge?: number;
    page: number;
    limit: number;
  }): Promise<{ users: User[]; total: number }> {
    const [entities, total] = await this.repo.findAndCount({
      where: {
        ...(filters.minAge !== undefined && {
          age: MoreThanOrEqual(filters.minAge),
        }),
        ...(filters.maxAge !== undefined && {
          age: LessThanOrEqual(filters.maxAge),
        }),
      },
      skip: (filters.page - 1) * filters.limit,
      take: filters.limit,
    });

    return { users: entities.map((e) => this.toUser(e)), total };
  }

  async findById(id: number): Promise<User | null> {
    const entity = await this.repo.findOne({ where: { id } });
    return entity ? this.toUser(entity) : null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const entity = await this.repo.findOne({ where: { email } });
    return entity ? this.toUser(entity) : null;
  }

  private toUser(entity: UserEntity): User {
    return new User({
      id: entity.id,
      name: entity.name,
      email: entity.email,
      age: entity.age,
      createdAt: entity.createdAt,
    });
  }
}
