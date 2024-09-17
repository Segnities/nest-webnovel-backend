import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutContinueReadingInput } from './user-create-without-continue-reading.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutContinueReadingInput } from './user-create-or-connect-without-continue-reading.input';
import { UserUpsertWithoutContinueReadingInput } from './user-upsert-without-continue-reading.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutContinueReadingInput } from './user-update-to-one-with-where-without-continue-reading.input';

@InputType()
export class UserUpdateOneRequiredWithoutContinueReadingNestedInput {

    @Field(() => UserCreateWithoutContinueReadingInput, {nullable:true})
    @Type(() => UserCreateWithoutContinueReadingInput)
    create?: UserCreateWithoutContinueReadingInput;

    @Field(() => UserCreateOrConnectWithoutContinueReadingInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutContinueReadingInput)
    connectOrCreate?: UserCreateOrConnectWithoutContinueReadingInput;

    @Field(() => UserUpsertWithoutContinueReadingInput, {nullable:true})
    @Type(() => UserUpsertWithoutContinueReadingInput)
    upsert?: UserUpsertWithoutContinueReadingInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutContinueReadingInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutContinueReadingInput)
    update?: UserUpdateToOneWithWhereWithoutContinueReadingInput;
}
