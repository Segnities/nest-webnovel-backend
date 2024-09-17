import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutNovelsInput } from './author-update-without-novels.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutNovelsInput } from './author-create-without-novels.input';
import { AuthorWhereInput } from './author-where.input';

@InputType()
export class AuthorUpsertWithoutNovelsInput {

    @Field(() => AuthorUpdateWithoutNovelsInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutNovelsInput)
    update!: AuthorUpdateWithoutNovelsInput;

    @Field(() => AuthorCreateWithoutNovelsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutNovelsInput)
    create!: AuthorCreateWithoutNovelsInput;

    @Field(() => AuthorWhereInput, {nullable:true})
    @Type(() => AuthorWhereInput)
    where?: AuthorWhereInput;
}
