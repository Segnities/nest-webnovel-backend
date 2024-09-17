import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutResolvedContentComplaintsInput } from './user-create-without-resolved-content-complaints.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutResolvedContentComplaintsInput } from './user-create-or-connect-without-resolved-content-complaints.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutResolvedContentComplaintsInput {

    @Field(() => UserCreateWithoutResolvedContentComplaintsInput, {nullable:true})
    @Type(() => UserCreateWithoutResolvedContentComplaintsInput)
    create?: UserCreateWithoutResolvedContentComplaintsInput;

    @Field(() => UserCreateOrConnectWithoutResolvedContentComplaintsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutResolvedContentComplaintsInput)
    connectOrCreate?: UserCreateOrConnectWithoutResolvedContentComplaintsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
