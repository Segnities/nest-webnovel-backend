import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereInput } from './author-where.input';
import { Type } from 'class-transformer';
import { AuthorUpdateWithoutNovelsInput } from './author-update-without-novels.input';

@InputType()
export class AuthorUpdateToOneWithWhereWithoutNovelsInput {

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;

    @Field(() => AuthorUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutNovelsInput)
    data!: AuthorUpdateWithoutNovelsInput;
}
