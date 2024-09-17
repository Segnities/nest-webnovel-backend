import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutComplaintReasonsInput } from './user-create-without-complaint-reasons.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutComplaintReasonsInput } from './user-create-or-connect-without-complaint-reasons.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutComplaintReasonsInput {

    @Field(() => UserCreateWithoutComplaintReasonsInput, {nullable:true})
    @Type(() => UserCreateWithoutComplaintReasonsInput)
    create?: UserCreateWithoutComplaintReasonsInput;

    @Field(() => UserCreateOrConnectWithoutComplaintReasonsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutComplaintReasonsInput)
    connectOrCreate?: UserCreateOrConnectWithoutComplaintReasonsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
