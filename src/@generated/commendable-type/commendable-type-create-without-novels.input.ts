import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ChapterCreateNestedManyWithoutCommendableTypeInput } from '../chapter/chapter-create-nested-many-without-commendable-type.input';
import { ReviewCreateNestedManyWithoutCommendableTypeInput } from '../review/review-create-nested-many-without-commendable-type.input';
import { CommentCreateNestedManyWithoutCommendableTypeInput } from '../comment/comment-create-nested-many-without-commendable-type.input';
import { NewsCreateNestedManyWithoutCommendableTypeInput } from '../news/news-create-nested-many-without-commendable-type.input';

@InputType()
export class CommendableTypeCreateWithoutNovelsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ChapterCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    chapters?: ChapterCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => ReviewCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    reviews?: ReviewCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => CommentCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => NewsCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    news?: NewsCreateNestedManyWithoutCommendableTypeInput;
}
