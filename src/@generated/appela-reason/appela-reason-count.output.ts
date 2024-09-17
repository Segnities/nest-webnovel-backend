import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AppelaReasonCount {

    @Field(() => Int, {nullable:false})
    appeals?: number;
}
