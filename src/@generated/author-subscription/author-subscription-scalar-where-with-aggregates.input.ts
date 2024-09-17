import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AuthorSubscriptionScalarWhereWithAggregatesInput {

    @Field(() => [AuthorSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorSubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorSubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorSubscriptionScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorSubscriptionScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    authorId?: IntWithAggregatesFilter;
}
