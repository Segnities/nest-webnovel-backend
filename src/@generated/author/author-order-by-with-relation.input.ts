import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NovelOrderByRelationAggregateInput } from '../novel/novel-order-by-relation-aggregate.input';
import { AuthorSubscriptionOrderByRelationAggregateInput } from '../author-subscription/author-subscription-order-by-relation-aggregate.input';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';

@InputType()
export class AuthorOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => NovelOrderByRelationAggregateInput, {nullable:true})
    novels?: NovelOrderByRelationAggregateInput;

    @Field(() => AuthorSubscriptionOrderByRelationAggregateInput, {nullable:true})
    authorSubscription?: AuthorSubscriptionOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelationAggregateInput, {nullable:true})
    notifications?: NotificationOrderByRelationAggregateInput;
}
