import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../novel/novel-unchecked-create-nested-many-without-commendable-type.input';
import { ReviewUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../review/review-unchecked-create-nested-many-without-commendable-type.input';
import { CommentUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../comment/comment-unchecked-create-nested-many-without-commendable-type.input';
import { NewsUncheckedCreateNestedManyWithoutCommendableTypeInput } from '../news/news-unchecked-create-nested-many-without-commendable-type.input';

@InputType()
export class CommendableTypeUncheckedCreateWithoutChaptersInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => NovelUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutCommendableTypeInput;

    @Field(() => NewsUncheckedCreateNestedManyWithoutCommendableTypeInput, {nullable:true})
    news?: NewsUncheckedCreateNestedManyWithoutCommendableTypeInput;
}
