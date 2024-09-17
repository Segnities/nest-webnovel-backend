import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkCreateManyInput } from './bookmark-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBookmarkArgs {

    @Field(() => [BookmarkCreateManyInput], {nullable:false})
    @Type(() => BookmarkCreateManyInput)
    data!: Array<BookmarkCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
