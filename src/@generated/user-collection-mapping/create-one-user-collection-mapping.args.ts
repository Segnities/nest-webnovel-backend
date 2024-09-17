import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingCreateInput } from './user-collection-mapping-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserCollectionMappingArgs {

    @Field(() => UserCollectionMappingCreateInput, {nullable:false})
    @Type(() => UserCollectionMappingCreateInput)
    data!: UserCollectionMappingCreateInput;
}
