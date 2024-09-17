import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ComplaintCategoryUpdateOneRequiredWithoutComplaintTargetTypesNestedInput } from '../complaint-category/complaint-category-update-one-required-without-complaint-target-types-nested.input';
import { UserComplaintUpdateManyWithoutComplaintTargetTypeNestedInput } from '../user-complaint/user-complaint-update-many-without-complaint-target-type-nested.input';
import { ContentComplaintUpdateManyWithoutComplaintTargetTypeNestedInput } from '../content-complaint/content-complaint-update-many-without-complaint-target-type-nested.input';
import { BanUpdateManyWithoutComplaintTargetTypeNestedInput } from '../ban/ban-update-many-without-complaint-target-type-nested.input';
import { NovelUpdateManyWithoutComplainTargetTypeNestedInput } from '../novel/novel-update-many-without-complain-target-type-nested.input';
import { ReviewUpdateManyWithoutComplainTargetTypeNestedInput } from '../review/review-update-many-without-complain-target-type-nested.input';
import { CommentUpdateManyWithoutComplainTargetTypeNestedInput } from '../comment/comment-update-many-without-complain-target-type-nested.input';
import { ChapterUpdateManyWithoutComplainTargetTypeNestedInput } from '../chapter/chapter-update-many-without-complain-target-type-nested.input';

@InputType()
export class ComplaintTargetTypeUpdateWithoutNewsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ComplaintCategoryUpdateOneRequiredWithoutComplaintTargetTypesNestedInput, {nullable:true})
    complaintCategory?: ComplaintCategoryUpdateOneRequiredWithoutComplaintTargetTypesNestedInput;

    @Field(() => UserComplaintUpdateManyWithoutComplaintTargetTypeNestedInput, {nullable:true})
    usersComplaints?: UserComplaintUpdateManyWithoutComplaintTargetTypeNestedInput;

    @Field(() => ContentComplaintUpdateManyWithoutComplaintTargetTypeNestedInput, {nullable:true})
    contentComplaints?: ContentComplaintUpdateManyWithoutComplaintTargetTypeNestedInput;

    @Field(() => BanUpdateManyWithoutComplaintTargetTypeNestedInput, {nullable:true})
    bans?: BanUpdateManyWithoutComplaintTargetTypeNestedInput;

    @Field(() => NovelUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    novels?: NovelUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => ReviewUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    reviews?: ReviewUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => CommentUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutComplainTargetTypeNestedInput;

    @Field(() => ChapterUpdateManyWithoutComplainTargetTypeNestedInput, {nullable:true})
    chapter?: ChapterUpdateManyWithoutComplainTargetTypeNestedInput;
}
