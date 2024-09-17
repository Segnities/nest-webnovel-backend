import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutReviewedAppealsInput } from './user-create-without-reviewed-appeals.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutReviewedAppealsInput } from './user-create-or-connect-without-reviewed-appeals.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutReviewedAppealsInput {

    @Field(() => UserCreateWithoutReviewedAppealsInput, {nullable:true})
    @Type(() => UserCreateWithoutReviewedAppealsInput)
    create?: UserCreateWithoutReviewedAppealsInput;

    @Field(() => UserCreateOrConnectWithoutReviewedAppealsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutReviewedAppealsInput)
    connectOrCreate?: UserCreateOrConnectWithoutReviewedAppealsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;
}
