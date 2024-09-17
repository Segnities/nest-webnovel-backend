import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Novel } from '../novel/novel.model';

@ObjectType()
export class NovelSubscription {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;
}
