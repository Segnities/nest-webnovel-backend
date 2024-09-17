import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ChapterUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../chapter/chapter-unchecked-create-nested-many-without-commendable-type.input';
import { ReviewUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../review/review-unchecked-create-nested-many-without-commendable-type.input';
import { CommentUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../comment/comment-unchecked-create-nested-many-without-commendable-type.input';
import { NewsUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../news/news-unchecked-create-nested-many-without-commendable-type.input';

@InputType()
export class CommendableTypeUncheckedCreateWithoutNovelsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ChapterUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    chapters?: ChapterUncheckedCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => NewsUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    news?: NewsUncheckedCreateNestedManyWithoutCommendableTypeInput;
}
