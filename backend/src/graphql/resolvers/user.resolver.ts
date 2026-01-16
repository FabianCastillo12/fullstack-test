import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConflictException } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';
import { User } from '../models/user.model';
import { Order } from '../models/order.model';
import { CreateUserInput, UpdateOrderStatusInput } from '../inputs/user.input';
import { UserEntity } from '../../infrastructure/users/user.entity.orm';
import { OrderEntity } from '../../infrastructure/orders/order.entity.orm';

@SkipThrottle()
@Resolver(() => User)
export class UserResolver {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
  ) {}

  @Query(() => [User], { name: 'users' })
  async getUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User | null> {
    return this.userRepo.findOne({ where: { id } });
  }

  @ResolveField(() => [Order])
  async orders(@Parent() user: User): Promise<Order[]> {
    return this.orderRepo.find({ where: { userId: user.id } });
  }

  @Mutation(() => User)
  async createUser(@Args('input') input: CreateUserInput): Promise<User> {
    const existing = await this.userRepo.findOne({
      where: { email: input.email },
    });
    if (existing) {
      throw new ConflictException('El email ya está registrado');
    }
    const user = this.userRepo.create(input);
    return this.userRepo.save(user);
  }
}

@SkipThrottle()
@Resolver(() => Order)
export class OrderResolver {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepo: Repository<OrderEntity>,
  ) {}

  @Query(() => [Order], { name: 'orders' })
  async getOrders(): Promise<Order[]> {
    return this.orderRepo.find();
  }

  @Mutation(() => Order)
  async updateOrderStatus(
    @Args('input') input: UpdateOrderStatusInput,
  ): Promise<Order> {
    const order = await this.orderRepo.findOne({
      where: { id: input.orderId },
    });
    if (!order) {
      throw new Error('Orden no encontrada');
    }
    order.status = input.status;
    return this.orderRepo.save(order);
  }

  @Mutation(() => Order)
  async createOrder(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('description') description: string,
  ): Promise<Order> {
    const order = this.orderRepo.create({
      userId,
      description,
      status: 'pending',
    });
    return this.orderRepo.save(order);
  }
}
