import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BanWhereInput } from './ban-where.input';
import { Type } from 'class-transformer';
import { BanOrderByWithRelationInput } from './ban-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { BanWhereUniqueInput } from './ban-where-unique.input';
import { Int } from '@nestjs/graphql';
import { BanScalarFieldEnum } from './ban-scalar-field.enum';

@ArgsType()
export class FindFirstBanArgs {

    @Field(() => BanWhereInput, {nullable:true})
    @Type(() => BanWhereInput)
    where?: BanWhereInput;

    @Field(() => [BanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<BanOrderByWithRelationInput>;

    @Field(() => BanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<BanWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [BanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof BanScalarFieldEnum>;
}
