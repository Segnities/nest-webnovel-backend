import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateInput } from './user-collection-mapping-create.input';
import { UserCollectionMappingUpdateInput } from './user-collection-mapping-update.input';

@ArgsType()
export class UpsertOneUserCollectionMappingArgs {

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;

    @Field(() => UserCollectionMappingCreateInput, {nullable:false})
    @Type(() => UserCollectionMappingCreateInput)
    create!: UserCollectionMappingCreateInput;

    @Field(() => UserCollectionMappingUpdateInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateInput)
    update!: UserCollectionMappingUpdateInput;
}
