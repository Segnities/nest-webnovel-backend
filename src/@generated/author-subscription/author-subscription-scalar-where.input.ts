import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AuthorSubscriptionScalarWhereInput {

    @Field(() => [AuthorSubscriptionScalarWhereInput], {nullable:true})
    AND?: Array<AuthorSubscriptionScalarWhereInput>;

    @Field(() => [AuthorSubscriptionScalarWhereInput], {nullable:true})
    OR?: Array<AuthorSubscriptionScalarWhereInput>;

    @Field(() => [AuthorSubscriptionScalarWhereInput], {nullable:true})
    NOT?: Array<AuthorSubscriptionScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;
}
