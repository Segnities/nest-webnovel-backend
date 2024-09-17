import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ComplaintTargetTypeWhereUniqueInput } from './complaint-target-type-where-unique.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutUsersComplaintsInput } from './complaint-target-type-create-without-users-complaints.input';

@InputType()
export class ComplaintTargetTypeCreateOrConnectWithoutUsersComplaintsInput {

    @Field(() => ComplaintTargetTypeWhereUniqueInput, {nullable:false})
    @Type(() => ComplaintTargetTypeWhereUniqueInput)
    where!: Prisma.AtLeast<ComplaintTargetTypeWhereUniqueInput, 'id'>;

    @Field(() => ComplaintTargetTypeCreateWithoutUsersComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutUsersComplaintsInput)
    create!: ComplaintTargetTypeCreateWithoutUsersComplaintsInput;
}
