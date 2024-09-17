import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserComplaintsInput } from './user-create-without-user-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserComplaintsInput } from './user-create-or-connect-without-user-complaints.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserComplaintsInput {

    @Field(() => UserCreateWithoutUserComplaintsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserComplaintsInput)
    create?: UserCreateWithoutUserComplaintsInput;

    @Field(() => UserCreateOrConnectWithoutUserComplaintsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserComplaintsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserComplaintsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
