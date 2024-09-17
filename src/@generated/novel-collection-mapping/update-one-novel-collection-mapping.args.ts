import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NovelCollectionMappingUpdateInput } from './novel-collection-mapping-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';

@ArgsType()
export class UpdateOneNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingUpdateInput, {nullable:false})
    @Type(() => NovelCollectionMappingUpdateInput)
    data!: NovelCollectionMappingUpdateInput;

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;
}
