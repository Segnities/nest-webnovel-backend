import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class NovelCollectionMappingScalarWhereInput {

    @Field(() => [NovelCollectionMappingScalarWhereInput], {nullable:true})
    AND?: Array<NovelCollectionMappingScalarWhereInput>;

    @Field(() => [NovelCollectionMappingScalarWhereInput], {nullable:true})
    OR?: Array<NovelCollectionMappingScalarWhereInput>;

    @Field(() => [NovelCollectionMappingScalarWhereInput], {nullable:true})
    NOT?: Array<NovelCollectionMappingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userCollectionId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
