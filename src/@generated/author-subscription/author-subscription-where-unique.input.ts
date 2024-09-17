import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { AuthorRelationFilter } from '../author/author-relation-filter.input';

@InputType()
export class AuthorSubscriptionWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [AuthorSubscriptionWhereInput], {nullable:true})
    AND?: Array<AuthorSubscriptionWhereInput>;

    @Field(() => [AuthorSubscriptionWhereInput], {nullable:true})
    OR?: Array<AuthorSubscriptionWhereInput>;

    @Field(() => [AuthorSubscriptionWhereInput], {nullable:true})
    NOT?: Array<AuthorSubscriptionWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => AuthorRelationFilter, {nullable:true})
    author?: AuthorRelationFilter;
}
