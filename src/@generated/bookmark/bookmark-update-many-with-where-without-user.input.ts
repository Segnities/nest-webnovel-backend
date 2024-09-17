import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkScalarWhereInput } from './bookmark-scalar-where.input';
import { Type } from 'class-transformer';
import { BookmarkUncheckedUpdateManyWithoutUserInput } from './bookmark-unchecked-update-many-without-user.input';

@InputType()
export class BookmarkUpdateManyWithWhereWithoutUserInput {

    @Field(() => BookmarkScalarWhereInput, {nullable:false})
    @Type(() => BookmarkScalarWhereInput)
    where!: BookmarkScalarWhereInput;

    @Field(() => BookmarkUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => BookmarkUncheckedUpdateManyWithoutUserInput)
    data!: BookmarkUncheckedUpdateManyWithoutUserInput;
}
