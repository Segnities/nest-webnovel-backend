import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAuthorSubscriptionInput } from './user-create-without-author-subscription.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAuthorSubscriptionInput } from './user-create-or-connect-without-author-subscription.input';
import { UserUpsertWithoutAuthorSubscriptionInput } from './user-upsert-without-author-subscription.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAuthorSubscriptionInput } from './user-update-to-one-with-where-without-author-subscription.input';

@InputType()
export class UserUpdateOneRequiredWithoutAuthorSubscriptionNestedInput {

    @Field(() => UserCreateWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => UserCreateWithoutAuthorSubscriptionInput)
    create?: UserCreateWithoutAuthorSubscriptionInput;

    @Field(() => UserCreateOrConnectWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAuthorSubscriptionInput)
    connectOrCreate?: UserCreateOrConnectWithoutAuthorSubscriptionInput;

    @Field(() => UserUpsertWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => UserUpsertWithoutAuthorSubscriptionInput)
    upsert?: UserUpsertWithoutAuthorSubscriptionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAuthorSubscriptionInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAuthorSubscriptionInput)
    update?: UserUpdateToOneWithWhereWithoutAuthorSubscriptionInput;
}
