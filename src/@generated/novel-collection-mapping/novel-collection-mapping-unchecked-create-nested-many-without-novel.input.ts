import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateWithoutNovelInput } from './novel-collection-mapping-create-without-novel.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingCreateOrConnectWithoutNovelInput } from './novel-collection-mapping-create-or-connect-without-novel.input';
import { NovelCollectionMappingCreateManyNovelInputEnvelope } from './novel-collection-mapping-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';

@InputType()
export class NovelCollectionMappingUncheckedCreateNestedManyWithoutNovelInput {

    @Field(() => [NovelCollectionMappingCreateWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateWithoutNovelInput)
    create?: Array<NovelCollectionMappingCreateWithoutNovelInput>;

    @Field(() => [NovelCollectionMappingCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<NovelCollectionMappingCreateOrConnectWithoutNovelInput>;

    @Field(() => NovelCollectionMappingCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => NovelCollectionMappingCreateManyNovelInputEnvelope)
    createMany?: NovelCollectionMappingCreateManyNovelInputEnvelope;

    @Field(() => [NovelCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>>;
}
