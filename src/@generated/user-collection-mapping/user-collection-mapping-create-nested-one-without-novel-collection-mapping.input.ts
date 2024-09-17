import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateWithoutNovelCollectionMappingInput } from './user-collection-mapping-create-without-novel-collection-mapping.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput } from './user-collection-mapping-create-or-connect-without-novel-collection-mapping.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';

@InputType()
export class UserCollectionMappingCreateNestedOneWithoutNovelCollectionMappingInput {

    @Field(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput)
    create?: UserCollectionMappingCreateWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput, {nullable:true})
    @Type(() => UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput)
    connectOrCreate?: UserCollectionMappingCreateOrConnectWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    connect?: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;
}
