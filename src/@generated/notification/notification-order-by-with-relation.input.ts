import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { NotificationTypeOrderByWithRelationInput } from '../notification-type/notification-type-order-by-with-relation.input';
import { NovelOrderByWithRelationInput } from '../novel/novel-order-by-with-relation.input';
import { CommentOrderByWithRelationInput } from '../comment/comment-order-by-with-relation.input';
import { ReviewOrderByWithRelationInput } from '../review/review-order-by-with-relation.input';
import { AuthorOrderByWithRelationInput } from '../author/author-order-by-with-relation.input';
import { NotificationGroupOrderByWithRelationInput } from '../notification-group/notification-group-order-by-with-relation.input';

@InputType()
export class NotificationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    typeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relatedEntityType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relatedEntityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notificationStatus?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    novelId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    commentId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    reviewId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    authorId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    metadata?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    notificationGroupId?: SortOrderInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => NotificationTypeOrderByWithRelationInput, {nullable:true})
    type?: NotificationTypeOrderByWithRelationInput;

    @Field(() => NovelOrderByWithRelationInput, {nullable:true})
    novel?: NovelOrderByWithRelationInput;

    @Field(() => CommentOrderByWithRelationInput, {nullable:true})
    comment?: CommentOrderByWithRelationInput;

    @Field(() => ReviewOrderByWithRelationInput, {nullable:true})
    review?: ReviewOrderByWithRelationInput;

    @Field(() => AuthorOrderByWithRelationInput, {nullable:true})
    author?: AuthorOrderByWithRelationInput;

    @Field(() => NotificationGroupOrderByWithRelationInput, {nullable:true})
    notificationGroup?: NotificationGroupOrderByWithRelationInput;
}
