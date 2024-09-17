import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelSubscriptionWhereInput } from './novel-subscription-where.input';
import { Type } from 'class-transformer';
import { NovelSubscriptionOrderByWithRelationInput } from './novel-subscription-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelSubscriptionWhereUniqueInput } from './novel-subscription-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelSubscriptionScalarFieldEnum } from './novel-subscription-scalar-field.enum';

@ArgsType()
export class FindFirstNovelSubscriptionArgs {

    @Field(() => NovelSubscriptionWhereInput, {nullable:true})
    @Type(() => NovelSubscriptionWhereInput)
    where?: NovelSubscriptionWhereInput;

    @Field(() => [NovelSubscriptionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelSubscriptionOrderByWithRelationInput>;

    @Field(() => NovelSubscriptionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelSubscriptionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NovelSubscriptionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NovelSubscriptionScalarFieldEnum>;
}
