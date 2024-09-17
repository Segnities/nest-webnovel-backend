import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingWhereInput } from './novel-collection-mapping-where.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingOrderByWithRelationInput } from './novel-collection-mapping-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NovelCollectionMappingScalarFieldEnum } from './novel-collection-mapping-scalar-field.enum';

@ArgsType()
export class FindFirstNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingWhereInput, {nullable:true})
    @Type(() => NovelCollectionMappingWhereInput)
    where?: NovelCollectionMappingWhereInput;

    @Field(() => [NovelCollectionMappingOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NovelCollectionMappingOrderByWithRelationInput>;

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NovelCollectionMappingScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NovelCollectionMappingScalarFieldEnum>;
}
