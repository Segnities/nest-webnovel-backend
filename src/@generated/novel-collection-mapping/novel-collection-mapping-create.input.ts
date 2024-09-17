import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutNovelCollectionMappingInput } from '../novel/novel-create-nested-one-without-novel-collection-mapping.input';
import { UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput } from '../user-collection-mapping/user-collection-mapping-create-nested-one-without-novel-collection-mapping.input';

@InputType()
export class NovelCollectionMappingCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NovelCreateNestedOneWithoutNovelCollectionMappingInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput, {nullable:false})
    userCollectionMapping!: UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput;
}
