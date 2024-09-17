import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelRatingWhereInput } from './novel-rating-where.input';
import { Type } from 'class-transformer';
import { NovelRatingOrderByWithRelationInput } from './novel-rating-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelRatingWhereUniqueInput } from './novel-rating-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelRatingScalarFieldEnum } from './novel-rating-scalar-field.enum';

@ArgsType()
export class FindFirstNovelRatingArgs {

    @Field(() => NovelRatingWhereInput, {nullable:true})
    @Type(() => NovelRatingWhereInput)
    where?: NovelRatingWhereInput;

    @Field(() => [NovelRatingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelRatingOrderByWithRelationInput>;

    @Field(() => NovelRatingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelRatingWhereUniqueInput, 'id' | 'novelId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NovelRatingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NovelRatingScalarFieldEnum>;
}
