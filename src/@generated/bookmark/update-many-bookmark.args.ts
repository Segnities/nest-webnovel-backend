import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkUncheckedUpdateManyInput } from './bookmark-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { BookmarkWhereInput } from './bookmark-where.input';

@ArgsType()
export class UpdateManyBookmarkArgs {

    @Field(() => BookmarkUncheckedUpdateManyInput, {nullable:false})
    @Type(() => BookmarkUncheckedUpdateManyInput)
    data!: BookmarkUncheckedUpdateManyInput;

    @Field(() => BookmarkWhereInput, {nullable:true})
    @Type(() => BookmarkWhereInput)
    where?: BookmarkWhereInput;
}
