import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAppelaReasonArgs {

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:false})
    @Type(() => AppelaReasonWhereUniqueInput)
    where!: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;
}
