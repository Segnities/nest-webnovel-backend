import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { ComplaintCategoryRelationFilter } from '../complaint-category/complaint-category-relation-filter.input';
import { UserComplaintListRelationFilter } from '../user-complaint/user-complaint-list-relation-filter.input';
import { ContentComplaintListRelationFilter } from '../content-complaint/content-complaint-list-relation-filter.input';
import { BanListRelationFilter } from '../ban/ban-list-relation-filter.input';
import { NovelListRelationFilter } from '../novel/novel-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { NewsListRelationFilter } from '../news/news-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { ChapterListRelationFilter } from '../chapter/chapter-list-relation-filter.input';

@InputType()
export class ComplaintTargetTypeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ComplaintTargetTypeWhereInput], {nullable:true})
    AND?: Array<ComplaintTargetTypeWhereInput>;

    @Field(() => [ComplaintTargetTypeWhereInput], {nullable:true})
    OR?: Array<ComplaintTargetTypeWhereInput>;

    @Field(() => [ComplaintTargetTypeWhereInput], {nullable:true})
    NOT?: Array<ComplaintTargetTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintCategoryId?: IntFilter;

    @Field(() => ComplaintCategoryRelationFilter, {nullable:true})
    complaintCategory?: ComplaintCategoryRelationFilter;

    @Field(() => UserComplaintListRelationFilter, {nullable:true})
    usersComplaints?: UserComplaintListRelationFilter;

    @Field(() => ContentComplaintListRelationFilter, {nullable:true})
    contentComplaints?: ContentComplaintListRelationFilter;

    @Field(() => BanListRelationFilter, {nullable:true})
    bans?: BanListRelationFilter;

    @Field(() => NovelListRelationFilter, {nullable:true})
    novels?: NovelListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => NewsListRelationFilter, {nullable:true})
    news?: NewsListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => ChapterListRelationFilter, {nullable:true})
    chapter?: ChapterListRelationFilter;
}
