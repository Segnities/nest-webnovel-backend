import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateNestedOneWithoutUserCollectionMappingInput } from '../collection/collection-create-nested-one-without-user-collection-mapping.input';
import { NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput } from '../novel-collection-mapping/novel-collection-mapping-create-nested-many-without-user-collection-mapping.input';

@InputType()
export class UserCollectionMappingCreateWithoutUserInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CollectionCreateNestedOneWithoutUserCollectionMappingInput, {nullable:false})
    collection!: CollectionCreateNestedOneWithoutUserCollectionMappingInput;

    @Field(() => NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput;
}
