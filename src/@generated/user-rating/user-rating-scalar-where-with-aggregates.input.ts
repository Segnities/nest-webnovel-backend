import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserRatingScalarWhereWithAggregatesInput {

    @Field(() => [UserRatingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserRatingScalarWhereWithAggregatesInput>;

    @Field(() => [UserRatingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserRatingScalarWhereWithAggregatesInput>;

    @Field(() => [UserRatingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserRatingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    rating?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    novelId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;
}
