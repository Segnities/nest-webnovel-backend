import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';
import { CommendableTypeRelationFilter } from '../commendable-type/commendable-type-relation-filter.input';
import { BookmarkListRelationFilter } from '../bookmark/bookmark-list-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';
import { ContinueReadingListRelationFilter } from '../continue-reading/continue-reading-list-relation-filter.input';

@InputType()
export class ChapterWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ChapterWhereInput], {nullable:true})
    AND?: Array<ChapterWhereInput>;

    @Field(() => [ChapterWhereInput], {nullable:true})
    OR?: Array<ChapterWhereInput>;

    @Field(() => [ChapterWhereInput], {nullable:true})
    NOT?: Array<ChapterWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    commendableTypeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaitTypeId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;

    @Field(() => CommendableTypeRelationFilter, {nullable:true})
    commendableType?: CommendableTypeRelationFilter;

    @Field(() => BookmarkListRelationFilter, {nullable:true})
    bookmarks?: BookmarkListRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complainTargetType?: ComplaintTargetTypeRelationFilter;

    @Field(() => ContinueReadingListRelationFilter, {nullable:true})
    continueNovel?: ContinueReadingListRelationFilter;
}
