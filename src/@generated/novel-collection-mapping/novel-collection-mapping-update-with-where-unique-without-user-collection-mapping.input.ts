import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingUpdateWithoutUserCollectionMappingInput } from './novel-collection-mapping-update-without-user-collection-mapping.input';

@InputType()
export class NovelCollectionMappingUpdateWithWhereUniqueWithoutUserCollectionMappingInput {

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;

    @Field(() => NovelCollectionMappingUpdateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => NovelCollectionMappingUpdateWithoutUserCollectionMappingInput)
    data!: NovelCollectionMappingUpdateWithoutUserCollectionMappingInput;
}
