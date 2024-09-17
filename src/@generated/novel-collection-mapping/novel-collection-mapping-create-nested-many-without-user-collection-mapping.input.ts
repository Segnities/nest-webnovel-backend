import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateWithoutUserCollectionMappingInput } from './novel-collection-mapping-create-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput } from './novel-collection-mapping-create-or-connect-without-user-collection-mapping.input';
import { NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope } from './novel-collection-mapping-create-many-user-collection-mapping-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';

@InputType()
export class NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput {

    @Field(() => [NovelCollectionMappingCreateWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateWithoutUserCollectionMappingInput)
    create?: Array<NovelCollectionMappingCreateWithoutUserCollectionMappingInput>;

    @Field(() => [NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput)
    connectOrCreate?: Array<NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput>;

    @Field(() => NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope, {nullable:true})
    @Type(() => NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope)
    createMany?: NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope;

    @Field(() => [NovelCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>>;
}
