import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingUpdateManyMutationInput } from './user-collection-mapping-update-many-mutation.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';

@ArgsType()
export class UpdateManyUserCollectionMappingArgs {

    @Field(() => UserCollectionMappingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateManyMutationInput)
    data!: UserCollectionMappingUpdateManyMutationInput;

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;
}
