import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserComplaintUncheckedCreateNestedManyWithoutReasonInput } from '../user-complaint/user-complaint-unchecked-create-nested-many-without-reason.input';
import { ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput } from '../content-complaint/content-complaint-unchecked-create-nested-many-without-complaint-reason.input';

@InputType()
export class ComplaintReasonUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Int, {nullable:true})
    userId?: number;

    @Field(() => UserComplaintUncheckedCreateNestedManyWithoutReasonInput, {nullable:true})
    userComplaints?: UserComplaintUncheckedCreateNestedManyWithoutReasonInput;

    @Field(() => ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput, {nullable:true})
    contentComplaints?: ContentComplaintUncheckedCreateNestedManyWithoutComplaintReasonInput;
}
