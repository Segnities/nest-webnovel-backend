import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkCreateManyUserInput } from './bookmark-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BookmarkCreateManyUserInputEnvelope {

    @Field(() => [BookmarkCreateManyUserInput], {nullable:false})
    @Type(() => BookmarkCreateManyUserInput)
    data!: Array<BookmarkCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
