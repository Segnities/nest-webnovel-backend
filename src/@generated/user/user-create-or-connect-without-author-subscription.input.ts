import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAuthorSubscriptionInput } from './user-create-without-author-subscription.input';

@InputType()
export class UserCreateOrConnectWithoutAuthorSubscriptionInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutAuthorSubscriptionInput, {nullable:false})
    @Type(() => UserCreateWithoutAuthorSubscriptionInput)
    create!: UserCreateWithoutAuthorSubscriptionInput;
}
