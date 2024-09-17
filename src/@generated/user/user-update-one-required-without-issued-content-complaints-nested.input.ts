import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutIssuedContentComplaintsInput } from './user-create-without-issued-content-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutIssuedContentComplaintsInput } from './user-create-or-connect-without-issued-content-complaints.input';
import { UserUpsertWithoutIssuedContentComplaintsInput } from './user-upsert-without-issued-content-complaints.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutIssuedContentComplaintsInput } from './user-update-to-one-with-where-without-issued-content-complaints.input';

@InputType()
export class UserUpdateOneRequiredWithoutIssuedContentComplaintsNestedInput {

    @Field(() => UserCreateWithoutIssuedContentComplaintsInput, {nullable:true})
    @Type(() => UserCreateWithoutIssuedContentComplaintsInput)
    create?: UserCreateWithoutIssuedContentComplaintsInput;

    @Field(() => UserCreateOrConnectWithoutIssuedContentComplaintsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutIssuedContentComplaintsInput)
    connectOrCreate?: UserCreateOrConnectWithoutIssuedContentComplaintsInput;

    @Field(() => UserUpsertWithoutIssuedContentComplaintsInput, {nullable:true})
    @Type(() => UserUpsertWithoutIssuedContentComplaintsInput)
    upsert?: UserUpsertWithoutIssuedContentComplaintsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutIssuedContentComplaintsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutIssuedContentComplaintsInput)
    update?: UserUpdateToOneWithWhereWithoutIssuedContentComplaintsInput;
}
