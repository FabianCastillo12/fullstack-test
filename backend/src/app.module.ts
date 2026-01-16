import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { UsersModule } from './presentation/users/users.module';
import { GraphqlModule } from './graphql/graphql.module';
import { UserEntity } from './infrastructure/users/user.entity.orm';
import { OrderEntity } from './infrastructure/orders/order.entity.orm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'examen_user',
      password: '.',
      database: 'examen_db',
      schema: 'public',
      entities: [UserEntity, OrderEntity],
      synchronize: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [{ ttl: 60000, limit: 10 }],
    }),
    UsersModule,
    GraphqlModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
