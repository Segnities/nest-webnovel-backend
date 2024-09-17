import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingCreateWithoutUserCollectionMappingInput } from './novel-collection-mapping-create-without-user-collection-mapping.input';

@InputType()
export class NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput {

    @Field(() => NovelCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>;

    @Field(() => NovelCollectionMappingCreateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => NovelCollectionMappingCreateWithoutUserCollectionMappingInput)
    create!: NovelCollectionMappingCreateWithoutUserCollectionMappingInput;
}
