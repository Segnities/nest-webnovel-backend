import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CollectionCreateNestedOneWithoutUserCollectionMappingInput } from '../collection/collection-create-nested-one-without-user-collection-mapping.input';
import { UserCreateNestedOneWithoutUserCollectionMappingInput } from '../user/user-create-nested-one-without-user-collection-mapping.input';

@InputType()
export class UserCollectionMappingCreateWithoutNovelCollectionMappingInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CollectionCreateNestedOneWithoutUserCollectionMappingInput, {nullable:false})
    collection!: CollectionCreateNestedOneWithoutUserCollectionMappingInput;

    @Field(() => UserCreateNestedOneWithoutUserCollectionMappingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserCollectionMappingInput;
}
