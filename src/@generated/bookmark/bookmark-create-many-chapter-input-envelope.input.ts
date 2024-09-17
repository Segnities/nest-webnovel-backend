import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateManyChapterInput } from './bookmark-create-many-chapter.input';
import { Type } from 'class-transformer';

@InputType()
export class BookmarkCreateManyChapterInputEnvelope {

    @Field(() => [BookmarkCreateManyChapterInput], {nullable:false})
    @Type(() => BookmarkCreateManyChapterInput)
    data!: Array<BookmarkCreateManyChapterInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
