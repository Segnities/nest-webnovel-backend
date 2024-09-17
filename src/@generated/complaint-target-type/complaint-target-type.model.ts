import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplaintCategory } from '../complaint-category/complaint-category.model';
import { UserComplaint } from '../user-complaint/user-complaint.model';
import { ContentComplaint } from '../content-complaint/content-complaint.model';
import { Ban } from '../ban/ban.model';
import { Novel } from '../novel/novel.model';
import { Review } from '../review/review.model';
import { News } from '../news/news.model';
import { Comment } from '../comment/comment.model';
import { Chapter } from '../chapter/chapter.model';
import { ComplaintTargetTypeCount } from './complaint-target-type-count.output';

@ObjectType()
export class ComplaintTargetType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    complaintCategoryId!: number;

    @Field(() => ComplaintCategory, {nullable:false})
    complaintCategory?: ComplaintCategory;

    @Field(() => [UserComplaint], {nullable:true})
    usersComplaints?: Array<UserComplaint>;

    @Field(() => [ContentComplaint], {nullable:true})
    contentComplaints?: Array<ContentComplaint>;

    @Field(() => [Ban], {nullable:true})
    bans?: Array<Ban>;

    @Field(() => [Novel], {nullable:true})
    novels?: Array<Novel>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [News], {nullable:true})
    news?: Array<News>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Chapter], {nullable:true})
    chapter?: Array<Chapter>;

    @Field(() => ComplaintTargetTypeCount, {nullable:false})
    _count?: ComplaintTargetTypeCount;
}
