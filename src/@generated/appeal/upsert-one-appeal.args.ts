import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealWhereUniqueInput } from './appeal-where-unique.input';
import { Type } from 'class-transformer';
import { AppealCreateInput } from './appeal-create.input';
import { AppealUpdateInput } from './appeal-update.input';

@ArgsType()
export class UpsertOneAppealArgs {

    @Field(() => AppealWhereUniqueInput, {nullable:false})
    @Type(() => AppealWhereUniqueInput)
    where!: Prisma.AtLeast<AppealWhereUniqueInput, 'id'>;

    @Field(() => AppealCreateInput, {nullable:false})
    @Type(() => AppealCreateInput)
    create!: AppealCreateInput;

    @Field(() => AppealUpdateInput, {nullable:false})
    @Type(() => AppealUpdateInput)
    update!: AppealUpdateInput;
}
