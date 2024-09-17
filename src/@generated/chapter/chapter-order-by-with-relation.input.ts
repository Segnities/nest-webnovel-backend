import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelOrderByWithRelationInput } from '../novel/novel-order-by-with-relation.input';
import { CommendableTypeOrderByWithRelationInput } from '../commendable-type/commendable-type-order-by-with-relation.input';
import { BookmarkOrderByRelationAggregateInput } from '../bookmark/bookmark-order-by-relation-aggregate.input';
import { ComplaintTargetTypeOrderByWithRelationInput } from '../complaint-target-type/complaint-target-type-order-by-with-relation.input';
import { ContinueReadingOrderByRelationAggregateInput } from '../continue-reading/continue-reading-order-by-relation-aggregate.input';

@InputType()
export class ChapterOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    likes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    novelId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    commendableTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaitTypeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complaintTargetId?: keyof typeof SortOrder;

    @Field(() => NovelOrderByWithRelationInput, {nullable:true})
    novel?: NovelOrderByWithRelationInput;

    @Field(() => CommendableTypeOrderByWithRelationInput, {nullable:true})
    commendableType?: CommendableTypeOrderByWithRelationInput;

    @Field(() => BookmarkOrderByRelationAggregateInput, {nullable:true})
    bookmarks?: BookmarkOrderByRelationAggregateInput;

    @Field(() => ComplaintTargetTypeOrderByWithRelationInput, {nullable:true})
    complainTargetType?: ComplaintTargetTypeOrderByWithRelationInput;

    @Field(() => ContinueReadingOrderByRelationAggregateInput, {nullable:true})
    continueNovel?: ContinueReadingOrderByRelationAggregateInput;
}
