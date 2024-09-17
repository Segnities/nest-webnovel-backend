import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorSubscriptionWhereInput } from './author-subscription-where.input';
import { Type } from 'class-transformer';
import { AuthorSubscriptionOrderByWithRelationInput } from './author-subscription-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AuthorSubscriptionWhereUniqueInput } from './author-subscription-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorSubscriptionScalarFieldEnum } from './author-subscription-scalar-field.enum';

@ArgsType()
export class FindFirstAuthorSubscriptionArgs {

    @Field(() => AuthorSubscriptionWhereInput, {nullable:true})
    @Type(() => AuthorSubscriptionWhereInput)
    where?: AuthorSubscriptionWhereInput;

    @Field(() => [AuthorSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorSubscriptionOrderByWithRelationInput>;

    @Field(() => AuthorSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AuthorSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthorSubscriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorSubscriptionScalarFieldEnum>;
}
