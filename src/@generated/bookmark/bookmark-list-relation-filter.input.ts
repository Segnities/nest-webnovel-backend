import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BookmarkWhereInput } from './bookmark-where.input';

@InputType()
export class BookmarkListRelationFilter {

    @Field(() => BookmarkWhereInput, {nullable:true})
    every?: BookmarkWhereInput;

    @Field(() => BookmarkWhereInput, {nullable:true})
    some?: BookmarkWhereInput;

    @Field(() => BookmarkWhereInput, {nullable:true})
    none?: BookmarkWhereInput;
}
