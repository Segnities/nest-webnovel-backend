import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserComplaintUncheckedCreateNestedManyWithoutComplaintTargetTypeInput } from '../user-complaint/user-complaint-unchecked-create-nested-many-without-complaint-target-type.input';
import { ContentComplaintUncheckedCreateNestedManyWithoutComplaintTargetTypeInput } from '../content-complaint/content-complaint-unchecked-create-nested-many-without-complaint-target-type.input';
import { BanUncheckedCreateNestedManyWithoutComplaintTargetTypeInput } from '../ban/ban-unchecked-create-nested-many-without-complaint-target-type.input';
import { NovelUncheckedCreateNestedManyWithoutComplainTargetTypeInput } from '../novel/novel-unchecked-create-nested-many-without-complain-target-type.input';
import { ReviewUncheckedCreateNestedManyWithoutComplainTargetTypeInput } from '../review/review-unchecked-create-nested-many-without-complain-target-type.input';
import { NewsUncheckedCreateNestedManyWithoutComplainTargetTypeInput } from '../news/news-unchecked-create-nested-many-without-complain-target-type.input';
import { CommentUncheckedCreateNestedManyWithoutComplainTargetTypeInput } from '../comment/comment-unchecked-create-nested-many-without-complain-target-type.input';
import { ChapterUncheckedCreateNestedManyWithoutComplainTargetTypeInput } from '../chapter/chapter-unchecked-create-nested-many-without-complain-target-type.input';

@InputType()
export class ComplaintTargetTypeUncheckedCreateWithoutComplaintCategoryInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => UserComplaintUncheckedCreateNestedManyWithoutComplaintTargetTypeInput, {nullable:true})
    usersComplaints?: UserComplaintUncheckedCreateNestedManyWithoutComplaintTargetTypeInput;

    @Field(() => ContentComplaintUncheckedCreateNestedManyWithoutComplaintTargetTypeInput, {nullable:true})
    contentComplaints?: ContentComplaintUncheckedCreateNestedManyWithoutComplaintTargetTypeInput;

    @Field(() => BanUncheckedCreateNestedManyWithoutComplaintTargetTypeInput, {nullable:true})
    bans?: BanUncheckedCreateNestedManyWithoutComplaintTargetTypeInput;

    @Field(() => NovelUncheckedCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    novels?: NovelUncheckedCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => ReviewUncheckedCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    reviews?: ReviewUncheckedCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => NewsUncheckedCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    news?: NewsUncheckedCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => CommentUncheckedCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    comments?: CommentUncheckedCreateNestedManyWithoutComplainTargetTypeInput;

    @Field(() => ChapterUncheckedCreateNestedManyWithoutComplainTargetTypeInput, {nullable:true})
    chapter?: ChapterUncheckedCreateNestedManyWithoutComplainTargetTypeInput;
}
