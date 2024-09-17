import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutNovelCollectionMappingInput } from './novel-update-without-novel-collection-mapping.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutNovelCollectionMappingInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNovelCollectionMappingInput)
    data!: NovelUpdateWithoutNovelCollectionMappingInput;
}
