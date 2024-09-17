import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Novel } from '../novel/novel.model';
import { Chapter } from '../chapter/chapter.model';
import { Review } from '../review/review.model';
import { Comment } from '../comment/comment.model';
import { News } from '../news/news.model';
import { CommendableTypeCount } from './commendable-type-count.output';

@ObjectType()
export class CommendableType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Novel], {nullable:true})
    novels?: Array<Novel>;

    @Field(() => [Chapter], {nullable:true})
    chapters?: Array<Chapter>;

    @Field(() => [Review], {nullable:true})
    reviews?: Array<Review>;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [News], {nullable:true})
    news?: Array<News>;

    @Field(() => CommendableTypeCount, {nullable:false})
    _count?: CommendableTypeCount;
}
