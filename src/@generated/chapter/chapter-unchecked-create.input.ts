import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BookmarkUncheckedCreateNestedManyWithoutChapterInput } from '../bookmark/bookmark-unchecked-create-nested-many-without-chapter.input';
import { ContinueReadingUncheckedCreateNestedManyWithoutLastChapterInput } from '../continue-reading/continue-reading-unchecked-create-nested-many-without-last-chapter.input';

@InputType()
export class ChapterUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Int, {nullable:false})
    likes!: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Int, {nullable:false})
    novelId!: number;

    @Field(() => Int, {nullable:false})
    commendableTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaitTypeId!: number;

    @Field(() => Int, {nullable:false})
    complaintTargetId!: number;

    @Field(() => BookmarkUncheckedCreateNestedManyWithoutChapterInput, {nullable:true})
    bookmarks?: BookmarkUncheckedCreateNestedManyWithoutChapterInput;

    @Field(() => ContinueReadingUncheckedCreateNestedManyWithoutLastChapterInput, {nullable:true})
    continueNovel?: ContinueReadingUncheckedCreateNestedManyWithoutLastChapterInput;
}
