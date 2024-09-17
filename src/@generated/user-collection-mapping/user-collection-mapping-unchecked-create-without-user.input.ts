import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelCollectionMappingUncheckedCreateNestedManyWithoutUserCollectionMappingInput } from '../novel-collection-mapping/novel-collection-mapping-unchecked-create-nested-many-without-user-collection-mapping.input';

@InputType()
export class UserCollectionMappingUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    collectionId!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NovelCollectionMappingUncheckedCreateNestedManyWithoutUserCollectionMappingInput, {nullable:true})
    novelCollectionMapping?: NovelCollectionMappingUncheckedCreateNestedManyWithoutUserCollectionMappingInput;
}
