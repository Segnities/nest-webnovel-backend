import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { ComplaintCategoryOrderByWithRelationInput } from '../complaint-category/complaint-category-order-by-with-relation.input';
import { UserComplaintOrderByRelationAggregateInput } from '../user-complaint/user-complaint-order-by-relation-aggregate.input';
import { ContentComplaintOrderByRelationAggregateInput } from '../content-complaint/content-complaint-order-by-relation-aggregate.input';
import { BanOrderByRelationAggregateInput } from '../ban/ban-order-by-relation-aggregate.input';
import { NovelOrderByRelationAggregateInput } from '../novel/novel-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { NewsOrderByRelationAggregateInput } from '../news/news-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { ChapterOrderByRelationAggregateInput } from '../chapter/chapter-order-by-relation-aggregate.input';

@InputType()
export class ComplaintTargetTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    description?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    complaintCategoryId?: keyof typeof SortOrder;

    @Field(() => ComplaintCategoryOrderByWithRelationInput, {nullable:true})
    complaintCategory?: ComplaintCategoryOrderByWithRelationInput;

    @Field(() => UserComplaintOrderByRelationAggregateInput, {nullable:true})
    usersComplaints?: UserComplaintOrderByRelationAggregateInput;

    @Field(() => ContentComplaintOrderByRelationAggregateInput, {nullable:true})
    contentComplaints?: ContentComplaintOrderByRelationAggregateInput;

    @Field(() => BanOrderByRelationAggregateInput, {nullable:true})
    bans?: BanOrderByRelationAggregateInput;

    @Field(() => NovelOrderByRelationAggregateInput, {nullable:true})
    novels?: NovelOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => NewsOrderByRelationAggregateInput, {nullable:true})
    news?: NewsOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => ChapterOrderByRelationAggregateInput, {nullable:true})
    chapter?: ChapterOrderByRelationAggregateInput;
}
