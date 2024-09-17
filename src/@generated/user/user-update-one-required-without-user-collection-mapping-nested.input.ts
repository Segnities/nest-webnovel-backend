import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserCollectionMappingInput } from './user-create-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserCollectionMappingInput } from './user-create-or-connect-without-user-collection-mapping.input';
import { UserUpsertWithoutUserCollectionMappingInput } from './user-upsert-without-user-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserCollectionMappingInput } from './user-update-to-one-with-where-without-user-collection-mapping.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserCollectionMappingNestedInput {

    @Field(() => UserCreateWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => UserCreateWithoutUserCollectionMappingInput)
    create?: UserCreateWithoutUserCollectionMappingInput;

    @Field(() => UserCreateOrConnectWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserCollectionMappingInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserCollectionMappingInput;

    @Field(() => UserUpsertWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserCollectionMappingInput)
    upsert?: UserUpsertWithoutUserCollectionMappingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserCollectionMappingInput)
    update?: UserUpdateToOneWithWhereWithoutUserCollectionMappingInput;
}
