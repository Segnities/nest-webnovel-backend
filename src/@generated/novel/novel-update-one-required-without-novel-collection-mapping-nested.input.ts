import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNovelCollectionMappingInput } from './novel-create-without-novel-collection-mapping.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNovelCollectionMappingInput } from './novel-create-or-connect-without-novel-collection-mapping.input';
import { NovelUpsertWithoutNovelCollectionMappingInput } from './novel-upsert-without-novel-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { NovelUpdateToOneWithWhereWithoutNovelCollectionMappingInput } from './novel-update-to-one-with-where-without-novel-collection-mapping.input';

@InputType()
export class NovelUpdateOneRequiredWithoutNovelCollectionMappingNestedInput {

    @Field(() => NovelCreateWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => NovelCreateWithoutNovelCollectionMappingInput)
    create?: NovelCreateWithoutNovelCollectionMappingInput;

    @Field(() => NovelCreateOrConnectWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNovelCollectionMappingInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNovelCollectionMappingInput;

    @Field(() => NovelUpsertWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => NovelUpsertWithoutNovelCollectionMappingInput)
    upsert?: NovelUpsertWithoutNovelCollectionMappingInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelUpdateToOneWithWhereWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => NovelUpdateToOneWithWhereWithoutNovelCollectionMappingInput)
    update?: NovelUpdateToOneWithWhereWithoutNovelCollectionMappingInput;
}
