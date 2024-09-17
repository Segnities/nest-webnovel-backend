import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ChapterUpdateManyWithoutCommendableTypeNestedInput } from '../chapter/chapter-update-many-without-commendable-type-nested.input';
import { ReviewUpdateManyWithoutCommendableTypeNestedInput } from '../review/review-update-many-without-commendable-type-nested.input';
import { CommentUpdateManyWithoutCommendableTypeNestedInput } from '../comment/comment-update-many-without-commendable-type-nested.input';
import { NewsUpdateManyWithoutCommendableTypeNestedInput } from '../news/news-update-many-without-commendable-type-nested.input';

@InputType()
export class CommendableTypeUpdateWithoutNovelsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ChapterUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    chapters?: ChapterUpdateManyWithoutCommendableTypeNestedInput;

    @Field(() => ReviewUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutCommendableTypeNestedInput;

    @Field(() => CommentUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutCommendableTypeNestedInput;

    @Field(() => NewsUpdateManyWithoutCommendableTypeNestedInput, {nullable:true})
    news?: NewsUpdateManyWithoutCommendableTypeNestedInput;
}
