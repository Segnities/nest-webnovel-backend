import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingScalarWhereInput } from './user-collection-mapping-scalar-where.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingUpdateManyMutationInput } from './user-collection-mapping-update-many-mutation.input';

@InputType()
export class UserCollectionMappingUpdateManyWithWhereWithoutCollectionInput {

    @Field(() => UserCollectionMappingScalarWhereInput, {nullable:false})
    @Type(() => UserCollectionMappingScalarWhereInput)
    where!: UserCollectionMappingScalarWhereInput;

    @Field(() => UserCollectionMappingUpdateManyMutationInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateManyMutationInput)
    data!: UserCollectionMappingUpdateManyMutationInput;
}
