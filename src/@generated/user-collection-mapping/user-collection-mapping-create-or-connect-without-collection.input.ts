import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateWithoutCollectionInput } from './user-collection-mapping-create-without-collection.input';

@InputType()
export class UserCollectionMappingCreateOrConnectWithoutCollectionInput {

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => UserCollectionMappingCreateWithoutCollectionInput, {nullable:false})
    @Type(() => UserCollectionMappingCreateWithoutCollectionInput)
    create!: UserCollectionMappingCreateWithoutCollectionInput;
}
