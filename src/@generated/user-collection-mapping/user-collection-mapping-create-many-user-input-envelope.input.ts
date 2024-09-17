import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateManyUserInput } from './user-collection-mapping-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCollectionMappingCreateManyUserInputEnvelope {

    @Field(() => [UserCollectionMappingCreateManyUserInput], {nullable:false})
    @Type(() => UserCollectionMappingCreateManyUserInput)
    data!: Array<UserCollectionMappingCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
