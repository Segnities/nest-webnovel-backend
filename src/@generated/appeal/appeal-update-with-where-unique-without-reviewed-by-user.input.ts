import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Type } from 'class-transformer';
import { AppealUpdateWithoutReviewedByUserInput } from './appeal-update-without-reviewed-by-user.input';

@InputType()
export class AppealUpdateWithWhereUniqueWithoutReviewedByUserInput {

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealUpdateWithoutReviewedByUserInput, {nullable:false})
    @Type(() => AppealUpdateWithoutReviewedByUserInput)
    data!: AppealUpdateWithoutReviewedByUserInput;
}
