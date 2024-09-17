import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelCollectionMappingNovelIdUserCollectionIdCompoundUniqueInput } from './novel-collection-mapping-novel-id-user-collection-id-compound-unique.input';
import { NovelCollectionMappingWhereInput } from './novel-collection-mapping-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';
import { UserCollectionMappingRelationFilter } from '../user-collection-mapping/user-collection-mapping-relation-filter.input';

@InputType()
export class NovelCollectionMappingWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => NovelCollectionMappingNovelIdUserCollectionIdCompoundUniqueInput, {nullable:true})
    novelId_userCollectionId?: NovelCollectionMappingNovelIdUserCollectionIdCompoundUniqueInput;

    @Field(() => [NovelCollectionMappingWhereInput], {nullable:true})
    AND?: Array<NovelCollectionMappingWhereInput>;

    @Field(() => [NovelCollectionMappingWhereInput], {nullable:true})
    OR?: Array<NovelCollectionMappingWhereInput>;

    @Field(() => [NovelCollectionMappingWhereInput], {nullable:true})
    NOT?: Array<NovelCollectionMappingWhereInput>;

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
