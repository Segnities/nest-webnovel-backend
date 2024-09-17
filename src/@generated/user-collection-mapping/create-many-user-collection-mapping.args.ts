import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingCreateManyInput } from './user-collection-mapping-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserCollectionMappingArgs {

    @Field(() => [UserCollectionMappingCreateManyInput], {nullable:false})
    @Type(() => UserCollectionMappingCreateManyInput)
    data!: Array<UserCollectionMappingCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
