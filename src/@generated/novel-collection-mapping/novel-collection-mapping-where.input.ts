import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';
import { UserCollectionMappingRelationFilter } from '../user-collection-mapping/user-collection-mapping-relation-filter.input';

@InputType()
export class NovelCollectionMappingWhereInput {

    @Field(() => [NovelCollectionMappingWhereInput], {nullable:true})
    AND?: Array<NovelCollectionMappingWhereInput>;

    @Field(() => [NovelCollectionMappingWhereInput], {nullable:true})
    OR?: Array<NovelCollectionMappingWhereInput>;

    @Field(() => [NovelCollectionMappingWhereInput], {nullable:true})
    NOT?: Array<NovelCollectionMappingWhereInput>;

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

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;

    @Field(() => UserCollectionMappingRelationFilter, {nullable:true})
    userCollectionMapping?: UserCollectionMappingRelationFilter;
}
