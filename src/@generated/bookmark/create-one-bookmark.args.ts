import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BookmarkCreateInput } from './bookmark-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBookmarkArgs {

    @Field(() => BookmarkCreateInput, {nullable:false})
    @Type(() => BookmarkCreateInput)
    data!: BookmarkCreateInput;
}
