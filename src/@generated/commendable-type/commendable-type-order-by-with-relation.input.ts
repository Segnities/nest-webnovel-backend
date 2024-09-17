import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelOrderByRelationAggregateInput } from '../novel/novel-order-by-relation-aggregate.input';
import { ChapterOrderByRelationAggregateInput } from '../chapter/chapter-order-by-relation-aggregate.input';
import { ReviewOrderByRelationAggregateInput } from '../review/review-order-by-relation-aggregate.input';
import { CommentOrderByRelationAggregateInput } from '../comment/comment-order-by-relation-aggregate.input';
import { NewsOrderByRelationAggregateInput } from '../news/news-order-by-relation-aggregate.input';

@InputType()
export class CommendableTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => NovelOrderByRelationAggregateInput, {nullable:true})
    novels?: NovelOrderByRelationAggregateInput;

    @Field(() => ChapterOrderByRelationAggregateInput, {nullable:true})
    chapters?: ChapterOrderByRelationAggregateInput;

    @Field(() => ReviewOrderByRelationAggregateInput, {nullable:true})
    reviews?: ReviewOrderByRelationAggregateInput;

    @Field(() => CommentOrderByRelationAggregateInput, {nullable:true})
    comments?: CommentOrderByRelationAggregateInput;

    @Field(() => NewsOrderByRelationAggregateInput, {nullable:true})
    news?: NewsOrderByRelationAggregateInput;
}
