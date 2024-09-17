import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateWithoutNovelInput } from './novel-collection-mapping-create-without-novel.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingCreateOrConnectWithoutNovelInput } from './novel-collection-mapping-create-or-connect-without-novel.input';
import { NovelCollectionMappingUpsertWithWhereUniqueWithoutNovelInput } from './novel-collection-mapping-upsert-with-where-unique-without-novel.input';
import { NovelCollectionMappingCreateManyNovelInputEnvelope } from './novel-collection-mapping-create-many-novel-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { NovelCollectionMappingUpdateWithWhereUniqueWithoutNovelInput } from './novel-collection-mapping-update-with-where-unique-without-novel.input';
import { NovelCollectionMappingUpdateManyWithWhereWithoutNovelInput } from './novel-collection-mapping-update-many-with-where-without-novel.input';
import { NovelCollectionMappingScalarWhereInput } from './novel-collection-mapping-scalar-where.input';

@InputType()
export class NovelCollectionMappingUpdateManyWithoutNovelNestedInput {

    @Field(() => [NovelCollectionMappingCreateWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateWithoutNovelInput)
    create?: Array<NovelCollectionMappingCreateWithoutNovelInput>;

    @Field(() => [NovelCollectionMappingCreateOrConnectWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateOrConnectWithoutNovelInput)
    connectOrCreate?: Array<NovelCollectionMappingCreateOrConnectWithoutNovelInput>;

    @Field(() => [NovelCollectionMappingUpsertWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingUpsertWithWhereUniqueWithoutNovelInput)
    upsert?: Array<NovelCollectionMappingUpsertWithWhereUniqueWithoutNovelInput>;

    @Field(() => NovelCollectionMappingCreateManyNovelInputEnvelope, {nullable:true})
    @Type(() => NovelCollectionMappingCreateManyNovelInputEnvelope)
    createMany?: NovelCollectionMappingCreateManyNovelInputEnvelope;

    @Field(() => [NovelCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>>;

    @Field(() => [NovelCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>>;

    @Field(() => [NovelCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>>;

    @Field(() => [NovelCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => NovelCollectionMappingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NovelCollectionMappingWhereUniqueInput, 'id' | 'novelId_userCollectionId'>>;

    @Field(() => [NovelCollectionMappingUpdateWithWhereUniqueWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingUpdateWithWhereUniqueWithoutNovelInput)
    update?: Array<NovelCollectionMappingUpdateWithWhereUniqueWithoutNovelInput>;

    @Field(() => [NovelCollectionMappingUpdateManyWithWhereWithoutNovelInput], {nullable:true})
    @Type(() => NovelCollectionMappingUpdateManyWithWhereWithoutNovelInput)
    updateMany?: Array<NovelCollectionMappingUpdateManyWithWhereWithoutNovelInput>;

    @Field(() => [NovelCollectionMappingScalarWhereInput], {nullable:true})
    @Type(() => NovelCollectionMappingScalarWhereInput)
    deleteMany?: Array<NovelCollectionMappingScalarWhereInput>;
}
