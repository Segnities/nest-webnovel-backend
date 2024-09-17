import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Type } from 'class-transformer';
import { AppealCreateWithoutReviewedByUserInput } from './appeal-create-without-reviewed-by-user.input';

@InputType()
export class AppealCreateOrConnectWithoutReviewedByUserInput {

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealCreateWithoutReviewedByUserInput, {nullable:false})
    @Type(() => AppealCreateWithoutReviewedByUserInput)
    create!: AppealCreateWithoutReviewedByUserInput;
}
