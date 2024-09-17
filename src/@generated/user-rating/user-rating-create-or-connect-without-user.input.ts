import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Type } from 'class-transformer';
import { UserRatingCreateWithoutUserInput } from './user-rating-create-without-user.input';

@InputType()
export class UserRatingCreateOrConnectWithoutUserInput {

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => UserRatingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRatingCreateWithoutUserInput)
    create!: UserRatingCreateWithoutUserInput;
}
