import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';
import { Type } from 'class-transformer';
import { AppelaReasonCreateInput } from './appela-reason-create.input';
import { AppelaReasonUpdateInput } from './appela-reason-update.input';

@ArgsType()
export class UpsertOneAppelaReasonArgs {

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:false})
    @Type(() => AppelaReasonWhereUniqueInput)
    where!: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;

    @Field(() => AppelaReasonCreateInput, {nullable:false})
    @Type(() => AppelaReasonCreateInput)
    create!: AppelaReasonCreateInput;

    @Field(() => AppelaReasonUpdateInput, {nullable:false})
    @Type(() => AppelaReasonUpdateInput)
    update!: AppelaReasonUpdateInput;
}
