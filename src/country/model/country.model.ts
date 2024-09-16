import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Country {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field(() => [Novel], { nullable: true })
  novels?: Novel[];
}