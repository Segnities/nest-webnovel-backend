import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { ChapterRelationFilter } from '../chapter/chapter-relation-filter.input';
import { NovelRelationFilter } from '../novel/novel-relation-filter.input';

@InputType()
export class ContinueReadingWhereInput {

    @Field(() => [ContinueReadingWhereInput], {nullable:true})
    AND?: Array<ContinueReadingWhereInput>;

    @Field(() => [ContinueReadingWhereInput], {nullable:true})
    OR?: Array<ContinueReadingWhereInput>;

    @Field(() => [ContinueReadingWhereInput], {nullable:true})
    NOT?: Array<ContinueReadingWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    progressPercentage?: FloatFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    lastChapterId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    novelId?: IntFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => ChapterRelationFilter, {nullable:true})
    lastChapter?: ChapterRelationFilter;

    @Field(() => NovelRelationFilter, {nullable:true})
    novel?: NovelRelationFilter;
}
