import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserCollectionMappingInput } from '../user/user-create-nested-one-without-user-collection-mapping.input';
import { NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput } from '../novel-collection-mapping/novel-collection-mapping-create-nested-many-without-user-collection-mapping.input';

@InputType()
export class UserCollectionMappingCreateWithoutCollectionInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutUserCollectionMappingInput, {nullable:false})
    user!: UserCreateNestedOneWithoutUserCollectionMappingInput;

    @Field(() => NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingCreateNestedManyWithoutUserCollectionMappingInput;
}
