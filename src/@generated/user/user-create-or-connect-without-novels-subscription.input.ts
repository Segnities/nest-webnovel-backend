import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutNovelsSubscriptionInput } from './user-create-without-novels-subscription.input';

@InputType()
export class UserCreateOrConnectWithoutNovelsSubscriptionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutNovelsSubscriptionInput, {nullable:false})
    @Type(() => UserCreateWithoutNovelsSubscriptionInput)
    create!: UserCreateWithoutNovelsSubscriptionInput;
}
