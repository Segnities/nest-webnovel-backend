import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCollectionMappingUncheckedCreateNestedManyWithoutCollectionInput } from '../user-collection-mapping/user-collection-mapping-unchecked-create-nested-many-without-collection.input';

@InputType()
export class CollectionUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => UserCollectionMappingUncheckedCreateNestedManyWithoutCollectionInput, {nullable:true})
    userCollectionMapping?: UserCollectionMappingUncheckedCreateNestedManyWithoutCollectionInput;
}
