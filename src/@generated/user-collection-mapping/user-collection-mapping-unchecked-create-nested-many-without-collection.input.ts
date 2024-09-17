import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateWithoutCollectionInput } from './user-collection-mapping-create-without-collection.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateOrConnectWithoutCollectionInput } from './user-collection-mapping-create-or-connect-without-collection.input';
import { UserCollectionMappingCreateManyCollectionInputEnvelope } from './user-collection-mapping-create-many-collection-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';

@InputType()
export class UserCollectionMappingUncheckedCreateNestedManyWithoutCollectionInput {

    @Field(() => [UserCollectionMappingCreateWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateWithoutCollectionInput)
    create?: Array<UserCollectionMappingCreateWithoutCollectionInput>;

    @Field(() => [UserCollectionMappingCreateOrConnectWithoutCollectionInput], {nullable:true})
    @Type(() => UserCollectionMappingCreateOrConnectWithoutCollectionInput)
    connectOrCreate?: Array<UserCollectionMappingCreateOrConnectWithoutCollectionInput>;

    @Field(() => UserCollectionMappingCreateManyCollectionInputEnvelope, {nullable:true})
    @Type(() => UserCollectionMappingCreateManyCollectionInputEnvelope)
    createMany?: UserCollectionMappingCreateManyCollectionInputEnvelope;

    @Field(() => [UserCollectionMappingWhereUniqueInput], {nullable:true})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>>;
}
