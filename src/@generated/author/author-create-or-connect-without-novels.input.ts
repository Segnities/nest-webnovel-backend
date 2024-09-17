import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutNovelsInput } from './author-create-without-novels.input';

@InputType()
export class AuthorCreateOrConnectWithoutNovelsInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;

    @Field(() => AuthorCreateWithoutNovelsInput, {nullable:false})
    @Type(() => AuthorCreateWithoutNovelsInput)
    create!: AuthorCreateWithoutNovelsInput;
}
