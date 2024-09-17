import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateWithoutUserInput } from './user-collection-mapping-create-without-user.input';

@InputType()
export class UserCollectionMappingCreateOrConnectWithoutUserInput {

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => UserCollectionMappingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserCollectionMappingCreateWithoutUserInput)
    create!: UserCollectionMappingCreateWithoutUserInput;
}
