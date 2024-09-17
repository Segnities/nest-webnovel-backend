import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewedAppealsInput } from './user-create-without-reviewed-appeals.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewedAppealsInput } from './user-create-or-connect-without-reviewed-appeals.input';
import { UserUpsertWithoutReviewedAppealsInput } from './user-upsert-without-reviewed-appeals.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutReviewedAppealsInput } from './user-update-to-one-with-where-without-reviewed-appeals.input';

@InputType()
export class UserUpdateOneRequiredWithoutReviewedAppealsNestedInput {

    @Field(() => UserCreateWithoutReviewedAppealsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewedAppealsInput)
    create?: UserCreateWithoutReviewedAppealsInput;

    @Field(() => UserCreateOrConnectWithoutReviewedAppealsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewedAppealsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewedAppealsInput;

    @Field(() => UserUpsertWithoutReviewedAppealsInput, {nullable:true})
    @Type(() => UserUpsertWithoutReviewedAppealsInput)
    upsert?: UserUpsertWithoutReviewedAppealsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutReviewedAppealsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutReviewedAppealsInput)
    update?: UserUpdateToOneWithWhereWithoutReviewedAppealsInput;
}
