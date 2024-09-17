import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateWithoutCollectionInput } from './user-collection-mapping-create-without-collection.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateOrConnectWithoutCollectionInput } from './user-collection-mapping-create-or-connect-without-collection.input';
import { UserCollectionMappingUpsertWithWhereUniqueWithoutCollectionInput } from './user-collection-mapping-upsert-with-where-unique-without-collection.input';
import { UserCollectionMappingCreateManyCollectionInputEnvelope } from './user-collection-mapping-create-many-collection-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { UserCollectionMappingUpdateWithWhereUniqueWithoutCollectionInput } from './user-collection-mapping-update-with-where-unique-without-collection.input';
import { UserCollectionMappingUpdateManyWithWhereWithoutCollectionInput } from './user-collection-mapping-update-many-with-where-without-collection.input';
import { UserCollectionMappingScalarWhereInput } from './user-collection-mapping-scalar-where.input';

@InputType()
export class UserCollectionMappingUpdateManyWithoutCollectionNestedInput {

    @Field(() => [UserCollectionMappingCreateWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateWithoutCollectionInput)
    create?: Array<UserCollectionMappingCreateWithoutCollectionInput>;

    @Field(() => [UserCollectionMappingCreateOrConnectWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateOrConnectWithoutCollectionInput)
    connectOrCreate?: Array<UserCollectionMappingCreateOrConnectWithoutCollectionInput>;

    @Field(() => [UserCollectionMappingUpsertWithWhereUniqueWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingUpsertWithWhereUniqueWithoutCollectionInput)
    upsert?: Array<UserCollectionMappingUpsertWithWhereUniqueWithoutCollectionInput>;

    @Field(() => UserCollectionMappingCreateManyCollectionInputEnvelope, {nullable:true})
    @Type(() => UserCollectionMappingCreateManyCollectionInputEnvelope)
    createMany?: UserCollectionMappingCreateManyCollectionInputEnvelope;

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

    @Field(() => [UserCollectionMappingUpdateWithWhereUniqueWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingUpdateWithWhereUniqueWithoutCollectionInput)
    update?: Array<UserCollectionMappingUpdateWithWhereUniqueWithoutCollectionInput>;

    @Field(() => [UserCollectionMappingUpdateManyWithWhereWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingUpdateManyWithWhereWithoutCollectionInput)
    updateMany?: Array<UserCollectionMappingUpdateManyWithWhereWithoutCollectionInput>;

    @Field(() => [UserCollectionMappingScalarWhereInput], {nullable:true})
    @Type(() => UserCollectionMappingScalarWhereInput)
    deleteMany?: Array<UserCollectionMappingScalarWhereInput>;
}
