import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { User } from '../user/user.model';

@ObjectType()
export class UserRating {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;

    @Field(() => User, {nullable:false})
    user?: User;
}
