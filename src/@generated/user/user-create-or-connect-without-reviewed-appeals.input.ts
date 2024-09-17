import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutReviewedAppealsInput } from './user-create-without-reviewed-appeals.input';

@InputType()
export class UserCreateOrConnectWithoutReviewedAppealsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'username' | 'email'>;

    @Field(() => UserCreateWithoutReviewedAppealsInput, {nullable:false})
    @Type(() => UserCreateWithoutReviewedAppealsInput)
    create!: UserCreateWithoutReviewedAppealsInput;
}
