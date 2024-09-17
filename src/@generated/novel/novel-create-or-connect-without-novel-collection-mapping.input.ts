import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNovelCollectionMappingInput } from './novel-create-without-novel-collection-mapping.input';

@InputType()
export class NovelCreateOrConnectWithoutNovelCollectionMappingInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => NovelCreateWithoutNovelCollectionMappingInput)
    create!: NovelCreateWithoutNovelCollectionMappingInput;
}
