import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { NovelListRelationFilter } from '../novel/novel-list-relation-filter.input';
import { ChapterListRelationFilter } from '../chapter/chapter-list-relation-filter.input';
import { ReviewListRelationFilter } from '../review/review-list-relation-filter.input';
import { CommentListRelationFilter } from '../comment/comment-list-relation-filter.input';
import { NewsListRelationFilter } from '../news/news-list-relation-filter.input';

@InputType()
export class CommendableTypeWhereInput {

    @Field(() => [CommendableTypeWhereInput], {nullable:true})
    AND?: Array<CommendableTypeWhereInput>;

    @Field(() => [CommendableTypeWhereInput], {nullable:true})
    OR?: Array<CommendableTypeWhereInput>;

    @Field(() => [CommendableTypeWhereInput], {nullable:true})
    NOT?: Array<CommendableTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => NovelListRelationFilter, {nullable:true})
    novels?: NovelListRelationFilter;

    @Field(() => ChapterListRelationFilter, {nullable:true})
    chapters?: ChapterListRelationFilter;

    @Field(() => ReviewListRelationFilter, {nullable:true})
    reviews?: ReviewListRelationFilter;

    @Field(() => CommentListRelationFilter, {nullable:true})
    comments?: CommentListRelationFilter;

    @Field(() => NewsListRelationFilter, {nullable:true})
    news?: NewsListRelationFilter;
}
