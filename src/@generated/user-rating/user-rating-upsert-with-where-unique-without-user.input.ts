import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRatingWhereUniqueInput } from './user-rating-where-unique.input';
import { Type } from 'class-transformer';
import { UserRatingUpdateWithoutUserInput } from './user-rating-update-without-user.input';
import { UserRatingCreateWithoutUserInput } from './user-rating-create-without-user.input';

@InputType()
export class UserRatingUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => UserRatingWhereUniqueInput, {nullable:false})
    @Type(() => UserRatingWhereUniqueInput)
    where!: Prisma.AtLeast<UserRatingWhereUniqueInput, 'id'>;

    @Field(() => UserRatingUpdateWithoutUserInput, {nullable:false})
    @Type(() => UserRatingUpdateWithoutUserInput)
    update!: UserRatingUpdateWithoutUserInput;

    @Field(() => UserRatingCreateWithoutUserInput, {nullable:false})
    @Type(() => UserRatingCreateWithoutUserInput)
    create!: UserRatingCreateWithoutUserInput;
}
