import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutNovelsInput } from './author-create-without-novels.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutNovelsInput } from './author-create-or-connect-without-novels.input';
import { AuthorUpsertWithoutNovelsInput } from './author-upsert-without-novels.input';
import { Prisma } from '@prisma/client';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateToOneWithWhereWithoutNovelsInput } from './author-update-to-one-with-where-without-novels.input';

@InputType()
export class AuthorUpdateOneRequiredWithoutNovelsNestedInput {

    @Field(() => AuthorCreateWithoutNovelsInput, {nullable:true})
    @Type(() => AuthorCreateWithoutNovelsInput)
    create?: AuthorCreateWithoutNovelsInput;

    @Field(() => AuthorCreateOrConnectWithoutNovelsInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutNovelsInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutNovelsInput;

    @Field(() => AuthorUpsertWithoutNovelsInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutNovelsInput)
    upsert?: AuthorUpsertWithoutNovelsInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: Prisma.AtLeast<AuthorWhereUniqueInput, 'id' | 'name'>;

    @Field(() => AuthorUpdateToOneWithWhereWithoutNovelsInput, {nullable:true})
    @Type(() => AuthorUpdateToOneWithWhereWithoutNovelsInput)
    update?: AuthorUpdateToOneWithWhereWithoutNovelsInput;
}
