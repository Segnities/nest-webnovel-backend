import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';

@InputType()
export class AlternativeTitleWhereInput {

    @Field(() => [AlternativeTitleWhereInput], {nullable:true})
    AND?: Array<AlternativeTitleWhereInput>;

    @Field(() => [AlternativeTitleWhereInput], {nullable:true})
    OR?: Array<AlternativeTitleWhereInput>;

    @Field(() => [AlternativeTitleWhereInput], {nullable:true})
    NOT?: Array<AlternativeTitleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;
}
