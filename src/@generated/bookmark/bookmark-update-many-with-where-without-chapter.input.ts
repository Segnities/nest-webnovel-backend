import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkScalarWhereInput } from './bookmark-scalar-where.input';
import { Type } from 'class-transformer';
import { BookmarkUncheckedUpdateManyWithoutChapterInput } from './bookmark-unchecked-update-many-without-chapter.input';

@InputType()
export class BookmarkUpdateManyWithWhereWithoutChapterInput {

    @Field(() => BookmarkScalarWhereInput, {nullable:false})
    @Type(() => BookmarkScalarWhereInput)
    where!: BookmarkScalarWhereInput;

    @Field(() => BookmarkUncheckedUpdateManyWithoutChapterInput, {nullable:false})
    @Type(() => BookmarkUncheckedUpdateManyWithoutChapterInput)
    data!: BookmarkUncheckedUpdateManyWithoutChapterInput;
}
