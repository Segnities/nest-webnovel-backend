import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NovelCreateNestedOneWithoutChaptersInput } from '../novel/novel-create-nested-one-without-chapters.input';
import { CommendableTypeCreateNestedOneWithoutChaptersInput } from '../commendable-type/commendable-type-create-nested-one-without-chapters.input';
import { BookmarkCreateNestedManyWithoutChapterInput } from '../bookmark/bookmark-create-nested-many-without-chapter.input';
import { ContinueReadingCreateNestedManyWithoutLastChapterInput } from '../continue-reading/continue-reading-create-nested-many-without-last-chapter.input';

@InputType()
export class ChapterCreateWithoutComplainTargetTypeInput {

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
    complaitTypeId!: number;

    @Field(() => NovelCreateNestedOneWithoutChaptersInput, {nullable:false})
    novel!: NovelCreateNestedOneWithoutChaptersInput;

    @Field(() => CommendableTypeCreateNestedOneWithoutChaptersInput, {nullable:false})
    commendableType!: CommendableTypeCreateNestedOneWithoutChaptersInput;

    @Field(() => BookmarkCreateNestedManyWithoutChapterInput, {nullable:true})
    bookmarks?: BookmarkCreateNestedManyWithoutChapterInput;

    @Field(() => ContinueReadingCreateNestedManyWithoutLastChapterInput, {nullable:true})
    continueNovel?: ContinueReadingCreateNestedManyWithoutLastChapterInput;
}
