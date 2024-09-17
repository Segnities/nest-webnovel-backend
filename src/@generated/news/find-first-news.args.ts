import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NewsWhereInput } from './news-where.input';
import { Type } from 'class-transformer';
import { NewsOrderByWithRelationInput } from './news-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NewsWhereUniqueInput } from './news-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NewsScalarFieldEnum } from './news-scalar-field.enum';

@ArgsType()
export class FindFirstNewsArgs {

    @Field(() => NewsWhereInput, {nullable:true})
    @Type(() => NewsWhereInput)
    where?: NewsWhereInput;

    @Field(() => [NewsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NewsOrderByWithRelationInput>;

    @Field(() => NewsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NewsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NewsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NewsScalarFieldEnum>;
}
