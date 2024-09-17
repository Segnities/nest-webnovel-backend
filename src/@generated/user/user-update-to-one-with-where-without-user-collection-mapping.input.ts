import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutUserCollectionMappingInput } from './user-update-without-user-collection-mapping.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutUserCollectionMappingInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserCollectionMappingInput)
    data!: UserUpdateWithoutUserCollectionMappingInput;
}
