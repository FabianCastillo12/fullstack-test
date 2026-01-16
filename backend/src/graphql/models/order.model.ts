import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field()
  description: string;

  @Field()
  status: string;

  @Field(() => Int)
  userId: number;

  @Field()
  createdAt: Date;
}
