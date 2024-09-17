import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Chapter } from '../chapter/chapter.model';

@ObjectType()
export class Bookmark {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    chapterId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Chapter, {nullable:false})
    chapter?: Chapter;
}
