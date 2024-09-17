import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContinueReadingWhereInput } from './continue-reading-where.input';
import { Type } from 'class-transformer';
import { ContinueReadingOrderByWithRelationInput } from './continue-reading-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ContinueReadingWhereUniqueInput } from './continue-reading-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContinueReadingScalarFieldEnum } from './continue-reading-scalar-field.enum';

@ArgsType()
export class FindManyContinueReadingArgs {

    @Field(() => ContinueReadingWhereInput, {nullable:true})
    @Type(() => ContinueReadingWhereInput)
    where?: ContinueReadingWhereInput;

    @Field(() => [ContinueReadingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContinueReadingOrderByWithRelationInput>;

    @Field(() => ContinueReadingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ContinueReadingWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContinueReadingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ContinueReadingScalarFieldEnum>;
}
