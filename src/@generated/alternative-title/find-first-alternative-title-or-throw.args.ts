import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlternativeTitleWhereInput } from './alternative-title-where.input';
import { Type } from 'class-transformer';
import { AlternativeTitleOrderByWithRelationInput } from './alternative-title-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AlternativeTitleWhereUniqueInput } from './alternative-title-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlternativeTitleScalarFieldEnum } from './alternative-title-scalar-field.enum';

@ArgsType()
export class FindFirstAlternativeTitleOrThrowArgs {

    @Field(() => AlternativeTitleWhereInput, {nullable:true})
    @Type(() => AlternativeTitleWhereInput)
    where?: AlternativeTitleWhereInput;

    @Field(() => [AlternativeTitleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AlternativeTitleOrderByWithRelationInput>;

    @Field(() => AlternativeTitleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AlternativeTitleWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AlternativeTitleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AlternativeTitleScalarFieldEnum>;
}
