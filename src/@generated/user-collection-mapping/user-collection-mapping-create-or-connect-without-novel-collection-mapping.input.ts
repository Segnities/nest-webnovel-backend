import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateWithoutNovelCollectionMappingInput } from './user-collection-mapping-create-without-novel-collection-mapping.input';

@InputType()
export class UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput {

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput)
    create!: UserCollectionMappingCreateWithoutNovelCollectionMappingInput;
}
