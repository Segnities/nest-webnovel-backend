import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeUpdateWithoutUsersComplaintsInput } from './complaint-target-type-update-without-users-complaints.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeCreateWithoutUsersComplaintsInput } from './complaint-target-type-create-without-users-complaints.input';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';

@InputType()
export class ComplaintTargetTypeUpsertWithoutUsersComplaintsInput {

    @Field(() => ComplaintTargetTypeUpdateWithoutUsersComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutUsersComplaintsInput)
    update!: ComplaintTargetTypeUpdateWithoutUsersComplaintsInput;

    @Field(() => ComplaintTargetTypeCreateWithoutUsersComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeCreateWithoutUsersComplaintsInput)
    create!: ComplaintTargetTypeCreateWithoutUsersComplaintsInput;

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;
}
