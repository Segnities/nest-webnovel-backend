import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonWhereInput } from './appela-reason-where.input';
import { Type } from 'class-transformer';
import { AppelaReasonOrderByWithRelationInput } from './appela-reason-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppelaReasonScalarFieldEnum } from './appela-reason-scalar-field.enum';

@ArgsType()
export class FindFirstAppelaReasonOrThrowArgs {

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    @Type(() => AppelaReasonWhereInput)
    where?: AppelaReasonWhereInput;

    @Field(() => [AppelaReasonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppelaReasonOrderByWithRelationInput>;

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppelaReasonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AppelaReasonScalarFieldEnum>;
}
