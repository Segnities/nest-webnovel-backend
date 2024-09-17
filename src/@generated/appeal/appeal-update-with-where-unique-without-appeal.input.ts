import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Type } from 'class-transformer';
import { AppealUpdateWithoutAppealInput } from './appeal-update-without-appeal.input';

@InputType()
export class AppealUpdateWithWhereUniqueWithoutAppealInput {

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealUpdateWithoutAppealInput, {nullable:false})
    @Type(() => AppealUpdateWithoutAppealInput)
    data!: AppealUpdateWithoutAppealInput;
}
