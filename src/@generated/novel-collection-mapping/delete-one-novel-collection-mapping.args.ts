import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNovelCollectionMappingArgs {

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;
}
