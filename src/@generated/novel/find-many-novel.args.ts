import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelOrderByWithRelationInput } from './novel-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelScalarFieldEnum } from './novel-scalar-field.enum';

@ArgsType()
export class FindManyNovelArgs {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => [NovelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelOrderByWithRelationInput>;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NovelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NovelScalarFieldEnum>;
}
