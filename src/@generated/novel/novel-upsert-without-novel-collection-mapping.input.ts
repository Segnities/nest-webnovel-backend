import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutNovelCollectionMappingInput } from './novel-update-without-novel-collection-mapping.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNovelCollectionMappingInput } from './novel-create-without-novel-collection-mapping.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutNovelCollectionMappingInput {

    @Field(() => NovelUpdateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNovelCollectionMappingInput)
    update!: NovelUpdateWithoutNovelCollectionMappingInput;

    @Field(() => NovelCreateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => NovelCreateWithoutNovelCollectionMappingInput)
    create!: NovelCreateWithoutNovelCollectionMappingInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
