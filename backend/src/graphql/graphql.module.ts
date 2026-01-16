import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserResolver, OrderResolver } from './resolvers/user.resolver';
import { UserEntity } from '../infrastructure/users/user.entity.orm';
import { OrderEntity } from '../infrastructure/orders/order.entity.orm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    TypeOrmModule.forFeature([UserEntity, OrderEntity]),
  ],
  providers: [UserResolver, OrderResolver],
})
export class GraphqlModule {}
