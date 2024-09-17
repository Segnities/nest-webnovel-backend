import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Chapter } from '../chapter/chapter.model';
import { Novel } from '../novel/novel.model';

@ObjectType()
export class ContinueReading {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Float, {nullable:false})
    progressPercentage!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    lastChapterId!: number;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Chapter, {nullable:false})
    lastChapter?: Chapter;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;
}
