import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCollectionMappingCreateManyCollectionInput } from './user-collection-mapping-create-many-collection.input';
import { Type } from 'class-transformer';

@InputType()
export class UserCollectionMappingCreateManyCollectionInputEnvelope {

    @Field(() => [UserCollectionMappingCreateManyCollectionInput], {nullable:false})
    @Type(() => UserCollectionMappingCreateManyCollectionInput)
    data!: Array<UserCollectionMappingCreateManyCollectionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
