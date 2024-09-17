import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutCommentsInput } from './complaint-target-type-create-without-comments.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutCommentsInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutCommentsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutCommentsInput)
    create!: ComplaintTargetTypeCreateWithoutCommentsInput;
}
