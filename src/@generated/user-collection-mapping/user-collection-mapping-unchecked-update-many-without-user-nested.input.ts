import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateWithoutUserInput } from './user-collection-mapping-create-without-user.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateOrConnectWithoutUserInput } from './user-collection-mapping-create-or-connect-without-user.input';
import { UserCollectionMappingUpsertWithWhereUniqueWithoutUserInput } from './user-collection-mapping-upsert-with-where-unique-without-user.input';
import { UserCollectionMappingCreateManyUserInputEnvelope } from './user-collection-mapping-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { UserCollectionMappingUpdateWithWhereUniqueWithoutUserInput } from './user-collection-mapping-update-with-where-unique-without-user.input';
import { UserCollectionMappingUpdateManyWithWhereWithoutUserInput } from './user-collection-mapping-update-many-with-where-without-user.input';
import { UserCollectionMappingScalarWhereInput } from './user-collection-mapping-scalar-where.input';

@InputType()
export class UserCollectionMappingUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [UserCollectionMappingCreateWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateWithoutUserInput)
    create?: Array<UserCollectionMappingCreateWithoutUserInput>;

    @Field(() => [UserCollectionMappingCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<UserCollectionMappingCreateOrConnectWithoutUserInput>;

    @Field(() => [UserCollectionMappingUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<UserCollectionMappingUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => UserCollectionMappingCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => UserCollectionMappingCreateManyUserInputEnvelope)
    createMany?: UserCollectionMappingCreateManyUserInputEnvelope;

    @Field(() => [UserCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>>;

    @Field(() => [UserCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>>;

    @Field(() => [UserCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>>;

    @Field(() => [UserCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>>;

    @Field(() => [UserCollectionMappingUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<UserCollectionMappingUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [UserCollectionMappingUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => UserCollectionMappingUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<UserCollectionMappingUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [UserCollectionMappingScalarWhereInput], {nullable:true})
    @Type(() => UserCollectionMappingScalarWhereInput)
    deleteMany?: Array<UserCollectionMappingScalarWhereInput>;
}
