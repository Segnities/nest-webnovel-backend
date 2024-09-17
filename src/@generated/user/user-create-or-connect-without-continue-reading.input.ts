import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutContinueReadingInput } from './user-create-without-continue-reading.input';

@InputType()
export class UserCreateOrConnectWithoutContinueReadingInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutContinueReadingInput, {nullable:false})
    @Type(() => UserCreateWithoutContinueReadingInput)
    create!: UserCreateWithoutContinueReadingInput;
}
