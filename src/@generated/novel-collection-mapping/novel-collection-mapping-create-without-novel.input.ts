import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput } from '../user-collection-mapping/user-collection-mapping-create-nested-one-without-novel-collection-mapping.input';

@InputType()
export class NovelCollectionMappingCreateWithoutNovelInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput, {nullable:false})
    userCollectionMapping!: UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput;
}
