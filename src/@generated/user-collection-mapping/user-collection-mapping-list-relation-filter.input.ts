import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';

@InputType()
export class UserCollectionMappingListRelationFilter {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    every?: UserCollectionMappingWhereInput;

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    some?: UserCollectionMappingWhereInput;

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    none?: UserCollectionMappingWhereInput;
}
