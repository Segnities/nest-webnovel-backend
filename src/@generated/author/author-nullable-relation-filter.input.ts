import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';

@InputType()
export class AuthorNullableRelationFilter {

    @Field(() => AuthorWhereInput, {nullable:true})
    is?: AuthorWhereInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    isNot?: AuthorWhereInput;
}
