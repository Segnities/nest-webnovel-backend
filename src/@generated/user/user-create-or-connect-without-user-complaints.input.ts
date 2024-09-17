import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserComplaintsInput } from './user-create-without-user-complaints.input';

@InputType()
export class UserCreateOrConnectWithoutUserComplaintsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutUserComplaintsInput, {nullable:false})
    @Type(() => UserCreateWithoutUserComplaintsInput)
    create!: UserCreateWithoutUserComplaintsInput;
}
