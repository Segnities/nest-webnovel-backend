import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserCollectionMappingUpdateInput } from './user-collection-mapping-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { UserCollectionMappingWhereUniqueInput } from './user-collection-mapping-where-unique.input';

@ArgsType()
export class UpdateOneUserCollectionMappingArgs {

    @Field(() => UserCollectionMappingUpdateInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateInput)
    data!: UserCollectionMappingUpdateInput;

    @Field(() => UserCollectionMappingWhereUniqueInput, {nullable:false})
    @Type(() => UserCollectionMappingWhereUniqueInput)
    where!: Prisma.AtLeast<UserCollectionMappingWhereUniqueInput, 'id' | 'collectionId_userId'>;
}
