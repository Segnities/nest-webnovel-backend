import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNewsInput } from './user-create-without-news.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNewsInput } from './user-create-or-connect-without-news.input';
import { UserUpsertWithoutNewsInput } from './user-upsert-without-news.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutNewsInput } from './user-update-to-one-with-where-without-news.input';

@InputType()
export class UserUpdateOneRequiredWithoutNewsNestedInput {

    @Field(() => UserCreateWithoutNewsInput, {nullable:true})
    @Type(() => UserCreateWithoutNewsInput)
    create?: UserCreateWithoutNewsInput;

    @Field(() => UserCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNewsInput)
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput;

    @Field(() => UserUpsertWithoutNewsInput, {nullable:true})
    @Type(() => UserUpsertWithoutNewsInput)
    upsert?: UserUpsertWithoutNewsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutNewsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutNewsInput)
    update?: UserUpdateToOneWithWhereWithoutNewsInput;
}
