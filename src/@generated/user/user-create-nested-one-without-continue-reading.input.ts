import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutContinueReadingInput } from './user-create-without-continue-reading.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutContinueReadingInput } from './user-create-or-connect-without-continue-reading.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutContinueReadingInput {

    @Field(() => UserCreateWithoutContinueReadingInput, {nullable:true})
    @Type(() => UserCreateWithoutContinueReadingInput)
    create?: UserCreateWithoutContinueReadingInput;

    @Field(() => UserCreateOrConnectWithoutContinueReadingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutContinueReadingInput)
    connectOrCreate?: UserCreateOrConnectWithoutContinueReadingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
