import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingCreateInput } from './novel-collection-mapping-create.input';
import { NovelCollectionMappingUpdateInput } from './novel-collection-mapping-update.input';

@ArgsType()
export class UpsertOneNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;

    @Field(() => NovelCollectionMappingCreateInput, {nullable:false})
    @Type(() => NovelCollectionMappingCreateInput)
    create!: NovelCollectionMappingCreateInput;

    @Field(() => NovelCollectionMappingUpdateInput, {nullable:false})
    @Type(() => NovelCollectionMappingUpdateInput)
    update!: NovelCollectionMappingUpdateInput;
}
