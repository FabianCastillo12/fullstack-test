import { InputType, Field, Int } from '@nestjs/graphql';
import { IsString, IsEmail, IsInt, Min, Max, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsString()
  @MinLength(2)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int)
  @IsInt()
  @Min(18)
  @Max(120)
  age: number;
}

@InputType()
export class UpdateOrderStatusInput {
  @Field(() => Int)
  @IsInt()
  orderId: number;

  @Field()
  @IsString()
  status: string;
}
