import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCommentStatusFilter } from '../prisma/enum-comment-status-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { CommendableTypeRelationFilter } from '../commendable-type/commendable-type-relation-filter.input';
import { ComplaintTargetTypeRelationFilter } from '../complaint-target-type/complaint-target-type-relation-filter.input';
import { CommentNullableRelationFilter } from './comment-nullable-relation-filter.input';
import { CommentListRelationFilter } from './comment-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class CommentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CommentWhereInput], {nullable:true})
    AND?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    OR?: Array<CommentWhereInput>;

    @Field(() => [CommentWhereInput], {nullable:true})
    NOT?: Array<CommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    nestedLevel?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    likes?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    dislikes?: IntFilter;

    @Field(() => EnumCommentStatusFilter, {nullable:true})
    status?: EnumCommentStatusFilter;

    @Field(() => IntFilter, {nullable:true})
    commendableTypeId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTypeId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    replyToId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    complaintTargetId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => CommendableTypeRelationFilter, {nullable:true})
    commendableType?: CommendableTypeRelationFilter;

    @Field(() => ComplaintTargetTypeRelationFilter, {nullable:true})
    complainTargetType?: ComplaintTargetTypeRelationFilter;

    @Field(() => CommentNullableRelationFilter, {nullable:true})
    replyTo?: CommentNullableRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    replies?: CommentListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
