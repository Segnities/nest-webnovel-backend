import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Type } from 'class-transformer';
import { AppealUpdateWithoutAppealInput } from './appeal-update-without-appeal.input';
import { AppealCreateWithoutAppealInput } from './appeal-create-without-appeal.input';

@InputType()
export class AppealUpsertWithWhereUniqueWithoutAppealInput {

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealUpdateWithoutAppealInput, {nullable:false})
    @Type(() => AppealUpdateWithoutAppealInput)
    update!: AppealUpdateWithoutAppealInput;

    @Field(() => AppealCreateWithoutAppealInput, {nullable:false})
    @Type(() => AppealCreateWithoutAppealInput)
    create!: AppealCreateWithoutAppealInput;
}
