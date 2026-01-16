import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from './order.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field()
  createdAt: Date;

  @Field(() => [Order], { nullable: true })
  orders?: Order[];
}
