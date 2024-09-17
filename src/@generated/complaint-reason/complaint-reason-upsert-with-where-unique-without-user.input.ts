import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintReasonWhereUniqueInput } from './complaint-reason-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintReasonUpdateWithoutUserInput } from './complaint-reason-update-without-user.input';
import { ComplaintReasonCreateWithoutUserInput } from './complaint-reason-create-without-user.input';

@InputType()
export class ComplaintReasonUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => ComplaintReasonWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintReasonWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintReasonWhereUniqueInput, 'id'>;

    @Field(() => ComplaintReasonUpdateWithoutUserInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateWithoutUserInput)
    update!: ComplaintReasonUpdateWithoutUserInput;

    @Field(() => ComplaintReasonCreateWithoutUserInput, {nullable:false})
    @Type(() => ComplaintReasonCreateWithoutUserInput)
    create!: ComplaintReasonCreateWithoutUserInput;
}
