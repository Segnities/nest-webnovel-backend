import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserCollectionMappingInput } from './user-create-without-user-collection-mapping.input';

@InputType()
export class UserCreateOrConnectWithoutUserCollectionMappingInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutUserCollectionMappingInput, {nullable:false})
    @Type(() => UserCreateWithoutUserCollectionMappingInput)
    create!: UserCreateWithoutUserCollectionMappingInput;
}
