import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserCollectionMappingInput } from './user-update-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserCollectionMappingInput } from './user-create-without-user-collection-mapping.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutUserCollectionMappingInput {

    @Field(() => UserUpdateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => UserUpdateWithoutUserCollectionMappingInput)
    update!: UserUpdateWithoutUserCollectionMappingInput;

    @Field(() => UserCreateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => UserCreateWithoutUserCollectionMappingInput)
    create!: UserCreateWithoutUserCollectionMappingInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
