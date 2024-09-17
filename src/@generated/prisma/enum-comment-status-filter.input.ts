import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentStatus } from './comment-status.enum';
import { NestedEnumCommentStatusFilter } from './nested-enum-comment-status-filter.input';

@InputType()
export class EnumCommentStatusFilter {

    @Field(() => CommentStatus, {nullable:true})
    equals?: keyof typeof CommentStatus;

    @Field(() => [CommentStatus], {nullable:true})
    in?: Array<keyof typeof CommentStatus>;

    @Field(() => [CommentStatus], {nullable:true})
    notIn?: Array<keyof typeof CommentStatus>;

    @Field(() => NestedEnumCommentStatusFilter, {nullable:true})
    not?: NestedEnumCommentStatusFilter;
}
