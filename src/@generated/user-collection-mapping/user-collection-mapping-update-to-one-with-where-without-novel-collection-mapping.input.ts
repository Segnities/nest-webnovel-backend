import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingWhereInput } from './user-collection-mapping-where.input';
import { Type } from 'class-transformer';
import { UserCollectionMappingUpdateWithoutNovelCollectionMappingInput } from './user-collection-mapping-update-without-novel-collection-mapping.input';

@InputType()
export class UserCollectionMappingUpdateToOneWithWhereWithoutNovelCollectionMappingInput {

    @Field(() => UserCollectionMappingWhereInput, {nullable:true})
    @Type(() => UserCollectionMappingWhereInput)
    where?: UserCollectionMappingWhereInput;

    @Field(() => UserCollectionMappingUpdateWithoutNovelCollectionMappingInput, {nullable:false})
    @Type(() => UserCollectionMappingUpdateWithoutNovelCollectionMappingInput)
    data!: UserCollectionMappingUpdateWithoutNovelCollectionMappingInput;
}
