import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutIssuedContentComplaintsInput } from './user-create-without-issued-content-complaints.input';

@InputType()
export class UserCreateOrConnectWithoutIssuedContentComplaintsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutIssuedContentComplaintsInput, {nullable:false})
    @Type(() => UserCreateWithoutIssuedContentComplaintsInput)
    create!: UserCreateWithoutIssuedContentComplaintsInput;
}
