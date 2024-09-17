import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';

@InputType()
export class UserCollectionMappingRelationFilter {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    is?: UserCollectionMappingWhereInput;

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    isNot?: UserCollectionMappingWhereInput;
}
