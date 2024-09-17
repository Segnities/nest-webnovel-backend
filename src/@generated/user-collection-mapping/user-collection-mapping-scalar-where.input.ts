import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class UserCollectionMappingScalarWhereInput {

    @Field(() => [UserCollectionMappingScalarWhereInput], {nullable:true})
    AND?: Array<UserCollectionMappingScalarWhereInput>;

    @Field(() => [UserCollectionMappingScalarWhereInput], {nullable:true})
    OR?: Array<UserCollectionMappingScalarWhereInput>;

    @Field(() => [UserCollectionMappingScalarWhereInput], {nullable:true})
    NOT?: Array<UserCollectionMappingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    collectionId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
