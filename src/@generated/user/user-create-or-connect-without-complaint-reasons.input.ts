import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutComplaintReasonsInput } from './user-create-without-complaint-reasons.input';

@InputType()
export class UserCreateOrConnectWithoutComplaintReasonsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutComplaintReasonsInput, {nullable:false})
    @Type(() => UserCreateWithoutComplaintReasonsInput)
    create!: UserCreateWithoutComplaintReasonsInput;
}
