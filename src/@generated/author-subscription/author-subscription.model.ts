import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Author } from '../author/author.model';

@ObjectType()
export class AuthorSubscription {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Author, {nullable:false})
    author?: Author;
}
