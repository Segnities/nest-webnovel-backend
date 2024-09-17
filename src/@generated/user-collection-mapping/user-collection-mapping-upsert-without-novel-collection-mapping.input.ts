import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingUpdateWithoutNovelCollectionMappingInput } from './user-collection-mapping-update-without-novel-collection-mapping.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingCreateWithoutNovelCollectionMappingInput } from './user-collection-mapping-create-without-novel-collection-mapping.input';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';

@InputType()
export class UserCollectionMappingUpsertWithoutNovelCollectionMappingInput {

    @Field(() => UserCollectionMappingUpdateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateWithoutNovelCollectionMappingInput)
    update!: UserCollectionMappingUpdateWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => UserCollectionMappingCreateWithoutNovelCollectionMappingInput)
    create!: UserCollectionMappingCreateWithoutNovelCollectionMappingInput;

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;
}
