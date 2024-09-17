import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentStatus } from './comment-status.enum';
import { NestedEnumCommentStatusWithAggregatesFilter } from './nested-enum-comment-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCommentStatusFilter } from './nested-enum-comment-status-filter.input';

@InputType()
export class EnumCommentStatusWithAggregatesFilter {

    @Field(() => CommentStatus, {nullable:true})
    equals?: keyof typeof CommentStatus;

    @Field(() => [CommentStatus], {nullable:true})
    in?: Array<keyof typeof CommentStatus>;

    @Field(() => [CommentStatus], {nullable:true})
    notIn?: Array<keyof typeof CommentStatus>;

    @Field(() => NestedEnumCommentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCommentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCommentStatusFilter, {nullable:true})
    _min?: NestedEnumCommentStatusFilter;

    @Field(() => NestedEnumCommentStatusFilter, {nullable:true})
    _max?: NestedEnumCommentStatusFilter;
}
