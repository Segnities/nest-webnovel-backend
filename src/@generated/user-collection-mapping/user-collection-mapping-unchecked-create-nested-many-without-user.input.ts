import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateWithoutUserInput } from './user-collection-mapping-create-without-user.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateOrConnectWithoutUserInput } from './user-collection-mapping-create-or-connect-without-user.input';
import { UserCollectionMappingCreateManyUserInputEnvelope } from './user-collection-mapping-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';

@InputType()
export class UserCollectionMappingUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [UserCollectionMappingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateWithoutUserInput)
    create?: Array<UserCollectionMappingCreateWithoutUserInput>;

    @Field(() => [UserCollectionMappingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserCollectionMappingCreateOrConnectWithoutUserInput>;

    @Field(() => UserCollectionMappingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserCollectionMappingCreateManyUserInputEnvelope)
    createMany?: UserCollectionMappingCreateManyUserInputEnvelope;

    @Field(() => [UserCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>>;
}
