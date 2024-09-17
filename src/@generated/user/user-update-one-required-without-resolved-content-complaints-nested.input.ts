import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResolvedContentComplaintsInput } from './user-create-without-resolved-content-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutResolvedContentComplaintsInput } from './user-create-or-connect-without-resolved-content-complaints.input';
import { UserUpsertWithoutResolvedContentComplaintsInput } from './user-upsert-without-resolved-content-complaints.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutResolvedContentComplaintsInput } from './user-update-to-one-with-where-without-resolved-content-complaints.input';

@InputType()
export class UserUpdateOneRequiredWithoutResolvedContentComplaintsNestedInput {

    @Field(() => UserCreateWithoutResolvedContentComplaintsInput, {nullable:true})
    @Type(() => UserCreateWithoutResolvedContentComplaintsInput)
    create?: UserCreateWithoutResolvedContentComplaintsInput;

    @Field(() => UserCreateOrConnectWithoutResolvedContentComplaintsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutResolvedContentComplaintsInput)
    connectOrCreate?: UserCreateOrConnectWithoutResolvedContentComplaintsInput;

    @Field(() => UserUpsertWithoutResolvedContentComplaintsInput, {nullable:true})
    @Type(() => UserUpsertWithoutResolvedContentComplaintsInput)
    upsert?: UserUpsertWithoutResolvedContentComplaintsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutResolvedContentComplaintsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutResolvedContentComplaintsInput)
    update?: UserUpdateToOneWithWhereWithoutResolvedContentComplaintsInput;
}
