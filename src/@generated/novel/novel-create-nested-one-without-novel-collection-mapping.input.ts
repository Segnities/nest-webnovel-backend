import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateWithoutNovelCollectionMappingInput } from './novel-create-without-novel-collection-mapping.input';
import { Type } from 'class-transformer';
import { NovelCreateOrConnectWithoutNovelCollectionMappingInput } from './novel-create-or-connect-without-novel-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';

@InputType()
export class NovelCreateNestedOneWithoutNovelCollectionMappingInput {

    @Field(() => NovelCreateWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => NovelCreateWithoutNovelCollectionMappingInput)
    create?: NovelCreateWithoutNovelCollectionMappingInput;

    @Field(() => NovelCreateOrConnectWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => NovelCreateOrConnectWithoutNovelCollectionMappingInput)
    connectOrCreate?: NovelCreateOrConnectWithoutNovelCollectionMappingInput;

    @Field(() => NovelWhereUniqueInput, {nullable:true})
    @Type(() => NovelWhereUniqueInput)
    connect?: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;
}
