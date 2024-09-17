import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutNovelCollectionMappingInput } from '../novel/novel-create-nested-one-without-novel-collection-mapping.input';

@InputType()
export class NovelCollectionMappingCreateWithoutUserCollectionMappingInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NovelCreateNestedOneWithoutNovelCollectionMappingInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutNovelCollectionMappingInput;
}
