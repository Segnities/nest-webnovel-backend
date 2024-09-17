import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { CommendableType } from '../commendable-type/commendable-type.model';
import { Bookmark } from '../bookmark/bookmark.model';
import { ComplaintTargetType } from '../complaint-target-type/complaint-target-type.model';
import { ContinueReading } from '../continue-reading/continue-reading.model';
import { ChapterCount } from './chapter-count.output';

@ObjectType()
export class Chapter {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaitTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => Novel, {nullable:false})
    novel?: Novel;

    @Field(() => CommendableType, {nullable:false})
    commendableType?: CommendableType;

    @Field(() => [Bookmark], {nullable:true})
    bookmarks?: Array<Bookmark>;

    @Field(() => ComplaintTargetType, {nullable:false})
    complainTargetType?: ComplaintTargetType;

    @Field(() => [ContinueReading], {nullable:true})
    continueNovel?: Array<ContinueReading>;

    @Field(() => ChapterCount, {nullable:false})
    _count?: ChapterCount;
}
