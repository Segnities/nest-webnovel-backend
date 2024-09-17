import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanReasonWhereInput } from './ban-reason-where.input';
import { Type } from 'class-transformer';
import { BanReasonOrderByWithRelationInput } from './ban-reason-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BanReasonWhereUniqueInput } from './ban-reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BanReasonScalarFieldEnum } from './ban-reason-scalar-field.enum';

@ArgsType()
export class FindFirstBanReasonOrThrowArgs {

    @Field(() => BanReasonWhereInput, {nullable:true})
    @Type(() => BanReasonWhereInput)
    where?: BanReasonWhereInput;

    @Field(() => [BanReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BanReasonOrderByWithRelationInput>;

    @Field(() => BanReasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BanReasonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BanReasonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BanReasonScalarFieldEnum>;
}
