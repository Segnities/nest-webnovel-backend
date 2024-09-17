import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ChapterCount {

    @Field(() => Int, {nullable:false})
    bookmarks?: number;

    @Field(() => Int, {nullable:false})
    continueNovel?: number;
}
