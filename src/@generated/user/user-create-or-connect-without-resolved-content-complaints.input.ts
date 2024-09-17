import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutResolvedContentComplaintsInput } from './user-create-without-resolved-content-complaints.input';

@InputType()
export class UserCreateOrConnectWithoutResolvedContentComplaintsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutResolvedContentComplaintsInput, {nullable:false})
    @Type(() => UserCreateWithoutResolvedContentComplaintsInput)
    create!: UserCreateWithoutResolvedContentComplaintsInput;
}
