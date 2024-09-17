import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCollectionMappingCreateWithoutUserCollectionMappingInput } from './novel-collection-mapping-create-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput } from './novel-collection-mapping-create-or-connect-without-user-collection-mapping.input';
import { NovelCollectionMappingUpsertWithWhereUniqueWithoutUserCollectionMappingInput } from './novel-collection-mapping-upsert-with-where-unique-without-user-collection-mapping.input';
import { NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope } from './novel-collection-mapping-create-many-user-collection-mapping-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NovelCollectionMappingWhereUniqueInput } from './novel-collection-mapping-where-unique.input';
import { NovelCollectionMappingUpdateWithWhereUniqueWithoutUserCollectionMappingInput } from './novel-collection-mapping-update-with-where-unique-without-user-collection-mapping.input';
import { NovelCollectionMappingUpdateManyWithWhereWithoutUserCollectionMappingInput } from './novel-collection-mapping-update-many-with-where-without-user-collection-mapping.input';
import { NovelCollectionMappingScalarWhereInput } from './novel-collection-mapping-scalar-where.input';

@InputType()
export class NovelCollectionMappingUpdateManyWithoutUserCollectionMappingNestedInput {

    @Field(() => [NovelCollectionMappingCreateWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateWithoutUserCollectionMappingInput)
    create?: Array<NovelCollectionMappingCreateWithoutUserCollectionMappingInput>;

    @Field(() => [NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput)
    connectOrCreate?: Array<NovelCollectionMappingCreateOrConnectWithoutUserCollectionMappingInput>;

    @Field(() => [NovelCollectionMappingUpsertWithWhereUniqueWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingUpsertWithWhereUniqueWithoutUserCollectionMappingInput)
    upsert?: Array<NovelCollectionMappingUpsertWithWhereUniqueWithoutUserCollectionMappingInput>;

    @Field(() => NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope, {nullable:true})
    @Type(() => NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope)
    createMany?: NovelCollectionMappingCreateManyUserCollectionMappingInputEnvelope;

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

    @Field(() => [NovelCollectionMappingUpdateWithWhereUniqueWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingUpdateWithWhereUniqueWithoutUserCollectionMappingInput)
    update?: Array<NovelCollectionMappingUpdateWithWhereUniqueWithoutUserCollectionMappingInput>;

    @Field(() => [NovelCollectionMappingUpdateManyWithWhereWithoutUserCollectionMappingInput], {nullable:true})
    @Type(() => NovelCollectionMappingUpdateManyWithWhereWithoutUserCollectionMappingInput)
    updateMany?: Array<NovelCollectionMappingUpdateManyWithWhereWithoutUserCollectionMappingInput>;

    @Field(() => [NovelCollectionMappingScalarWhereInput], {nullable:true})
    @Type(() => NovelCollectionMappingScalarWhereInput)
    deleteMany?: Array<NovelCollectionMappingScalarWhereInput>;
}
