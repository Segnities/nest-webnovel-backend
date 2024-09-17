import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ContentComplaintUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput } from '../content-complaint/content-complaint-unchecked-update-many-without-complaint-target-type-nested.input';
import { BanUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput } from '../ban/ban-unchecked-update-many-without-complaint-target-type-nested.input';
import { NovelUncheckedUpdateManyWithoutComplainTargetTypeNestedInput } from '../novel/novel-unchecked-update-many-without-complain-target-type-nested.input';
import { ReviewUncheckedUpdateManyWithoutComplainTargetTypeNestedInput } from '../review/review-unchecked-update-many-without-complain-target-type-nested.input';
import { NewsUncheckedUpdateManyWithoutComplainTargetTypeNestedInput } from '../news/news-unchecked-update-many-without-complain-target-type-nested.input';
import { CommentUncheckedUpdateManyWithoutComplainTargetTypeNestedInput } from '../comment/comment-unchecked-update-many-without-complain-target-type-nested.input';
import { ChapterUncheckedUpdateManyWithoutComplainTargetTypeNestedInput } from '../chapter/chapter-unchecked-update-many-without-complain-target-type-nested.input';

@InputType()
export class ComplaintTargetTypeUncheckedUpdateWithoutUsersComplaintsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complaintCategoryId?: IntFieldUpdateOperationsInput;

    @Field(() => ContentComplaintUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput, {nullable:true})
    contentComplaints?: ContentComplaintUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput;

    @Field(() => BanUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput, {nullable:true})
    bans?: BanUncheckedUpdateManyWithoutComplaintTargetTypeNestedInput;

    @Field(() => NovelUncheckedUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    novels?: NovelUncheckedUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => ReviewUncheckedUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    reviews?: ReviewUncheckedUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => NewsUncheckedUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    news?: NewsUncheckedUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => ChapterUncheckedUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    chapter?: ChapterUncheckedUpdateManyWithoutComplainTargetTypeNestedInput;
}
