import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonUpdateInput } from './appela-reason-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';

@ArgsType()
export class UpdateOneAppelaReasonArgs {

    @Field(() => AppelaReasonUpdateInput, {nullable:false})
    @Type(() => AppelaReasonUpdateInput)
    data!: AppelaReasonUpdateInput;

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:false})
    @Type(() => AppelaReasonWhereUniqueInput)
    where!: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;
}
