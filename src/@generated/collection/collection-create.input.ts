import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateNestedManyWithoutCollectionInput } from '../user-collection-mapping/user-collection-mapping-create-nested-many-without-collection.input';

@InputType()
export class CollectionCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCollectionMappingCreateNestedManyWithoutCollectionInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingCreateNestedManyWithoutCollectionInput;
}
