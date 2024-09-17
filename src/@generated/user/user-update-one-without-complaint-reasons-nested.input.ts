import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutComplaintReasonsInput } from './user-create-without-complaint-reasons.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutComplaintReasonsInput } from './user-create-or-connect-without-complaint-reasons.input';
import { UserUpsertWithoutComplaintReasonsInput } from './user-upsert-without-complaint-reasons.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutComplaintReasonsInput } from './user-update-to-one-with-where-without-complaint-reasons.input';

@InputType()
export class UserUpdateOneWithoutComplaintReasonsNestedInput {

    @Field(() => UserCreateWithoutComplaintReasonsInput, {nullable:true})
    @Type(() => UserCreateWithoutComplaintReasonsInput)
    create?: UserCreateWithoutComplaintReasonsInput;

    @Field(() => UserCreateOrConnectWithoutComplaintReasonsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutComplaintReasonsInput)
    connectOrCreate?: UserCreateOrConnectWithoutComplaintReasonsInput;

    @Field(() => UserUpsertWithoutComplaintReasonsInput, {nullable:true})
    @Type(() => UserUpsertWithoutComplaintReasonsInput)
    upsert?: UserUpsertWithoutComplaintReasonsInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutComplaintReasonsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutComplaintReasonsInput)
    update?: UserUpdateToOneWithWhereWithoutComplaintReasonsInput;
}
