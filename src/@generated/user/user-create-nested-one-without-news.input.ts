import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNewsInput } from './user-create-without-news.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNewsInput } from './user-create-or-connect-without-news.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutNewsInput {

    @Field(() => UserCreateWithoutNewsInput, {nullable:true})
    @Type(() => UserCreateWithoutNewsInput)
    create?: UserCreateWithoutNewsInput;

    @Field(() => UserCreateOrConnectWithoutNewsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNewsInput)
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
