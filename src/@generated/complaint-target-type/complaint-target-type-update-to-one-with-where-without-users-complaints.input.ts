import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintTargetTypeWhereInput } from './complaint-target-type-where.input';
import { Type } from 'class-transformer';
import { ComplaintTargetTypeUpdateWithoutUsersComplaintsInput } from './complaint-target-type-update-without-users-complaints.input';

@InputType()
export class ComplaintTargetTypeUpdateToOneWithWhereWithoutUsersComplaintsInput {

    @Field(() => ComplaintTargetTypeWhereInput, {nullable:true})
    @Type(() => ComplaintTargetTypeWhereInput)
    where?: ComplaintTargetTypeWhereInput;

    @Field(() => ComplaintTargetTypeUpdateWithoutUsersComplaintsInput, {nullable:false})
    @Type(() => ComplaintTargetTypeUpdateWithoutUsersComplaintsInput)
    data!: ComplaintTargetTypeUpdateWithoutUsersComplaintsInput;
}
