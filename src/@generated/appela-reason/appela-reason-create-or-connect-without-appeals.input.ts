import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppelaReasonWhereUniqueInput } from './appela-reason-where-unique.input';
import { Type } from 'class-transformer';
import { AppelaReasonCreateWithoutAppealsInput } from './appela-reason-create-without-appeals.input';

@InputType()
export class AppelaReasonCreateOrConnectWithoutAppealsInput {

    @Field(() => AppelaReasonWhereUniqueInput, {nullable:false})
    @Type(() => AppelaReasonWhereUniqueInput)
    where!: Prisma.AtLeast<AppelaReasonWhereUniqueInput, 'id'>;

    @Field(() => AppelaReasonCreateWithoutAppealsInput, {nullable:false})
    @Type(() => AppelaReasonCreateWithoutAppealsInput)
    create!: AppelaReasonCreateWithoutAppealsInput;
}
