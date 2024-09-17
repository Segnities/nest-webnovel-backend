import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChapterWhereInput } from './chapter-where.input';
import { Type } from 'class-transformer';
import { ChapterOrderByWithRelationInput } from './chapter-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ChapterWhereUniqueInput } from './chapter-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChapterScalarFieldEnum } from './chapter-scalar-field.enum';

@ArgsType()
export class FindManyChapterArgs {

    @Field(() => ChapterWhereInput, {nullable:true})
    @Type(() => ChapterWhereInput)
    where?: ChapterWhereInput;

    @Field(() => [ChapterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChapterOrderByWithRelationInput>;

    @Field(() => ChapterWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ChapterWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChapterScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChapterScalarFieldEnum>;
}
