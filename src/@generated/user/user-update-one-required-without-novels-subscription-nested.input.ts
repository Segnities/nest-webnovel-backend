import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutNovelsSubscriptionInput } from './user-create-without-novels-subscription.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutNovelsSubscriptionInput } from './user-create-or-connect-without-novels-subscription.input';
import { UserUpsertWithoutNovelsSubscriptionInput } from './user-upsert-without-novels-subscription.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutNovelsSubscriptionInput } from './user-update-to-one-with-where-without-novels-subscription.input';

@InputType()
export class UserUpdateOneRequiredWithoutNovelsSubscriptionNestedInput {

    @Field(() => UserCreateWithoutNovelsSubscriptionInput, {nullable:true})
    @Type(() => UserCreateWithoutNovelsSubscriptionInput)
    create?: UserCreateWithoutNovelsSubscriptionInput;

    @Field(() => UserCreateOrConnectWithoutNovelsSubscriptionInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutNovelsSubscriptionInput)
    connectOrCreate?: UserCreateOrConnectWithoutNovelsSubscriptionInput;

    @Field(() => UserUpsertWithoutNovelsSubscriptionInput, {nullable:true})
    @Type(() => UserUpsertWithoutNovelsSubscriptionInput)
    upsert?: UserUpsertWithoutNovelsSubscriptionInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutNovelsSubscriptionInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutNovelsSubscriptionInput)
    update?: UserUpdateToOneWithWhereWithoutNovelsSubscriptionInput;
}
