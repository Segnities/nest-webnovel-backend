import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserCollectionMappingArgs {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;
}
