import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserComplaintsInput } from './user-create-without-user-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserComplaintsInput } from './user-create-or-connect-without-user-complaints.input';
import { UserUpsertWithoutUserComplaintsInput } from './user-upsert-without-user-complaints.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutUserComplaintsInput } from './user-update-to-one-with-where-without-user-complaints.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserComplaintsNestedInput {

    @Field(() => UserCreateWithoutUserComplaintsInput, {nullable:true})
    @Type(() => UserCreateWithoutUserComplaintsInput)
    create?: UserCreateWithoutUserComplaintsInput;

    @Field(() => UserCreateOrConnectWithoutUserComplaintsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutUserComplaintsInput)
    connectOrCreate?: UserCreateOrConnectWithoutUserComplaintsInput;

    @Field(() => UserUpsertWithoutUserComplaintsInput, {nullable:true})
    @Type(() => UserUpsertWithoutUserComplaintsInput)
    upsert?: UserUpsertWithoutUserComplaintsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutUserComplaintsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutUserComplaintsInput)
    update?: UserUpdateToOneWithWhereWithoutUserComplaintsInput;
}
