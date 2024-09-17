import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserCollectionMappingInput } from './user-create-without-user-collection-mapping.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserCollectionMappingInput } from './user-create-or-connect-without-user-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserCollectionMappingInput {

    @Field(() => UserCreateWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => UserCreateWithoutUserCollectionMappingInput)
    create?: UserCreateWithoutUserCollectionMappingInput;

    @Field(() => UserCreateOrConnectWithoutUserCollectionMappingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserCollectionMappingInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserCollectionMappingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
