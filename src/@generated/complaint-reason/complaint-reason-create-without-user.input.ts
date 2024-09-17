import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserComplaintCreateNestedManyWithoutReasonInput } from '../user-complaint/user-complaint-create-nested-many-without-reason.input';
import { ContentComplaintCreateNestedManyWithoutComplaintReasonInput } from '../content-complaint/content-complaint-create-nested-many-without-complaint-reason.input';

@InputType()
export class ComplaintReasonCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => UserComplaintCreateNestedManyWithoutReasonInput, {nullable:true})
    userComplaints?: UserComplaintCreateNestedManyWithoutReasonInput;

    @Field(() => ContentComplaintCreateNestedManyWithoutComplaintReasonInput, {nullable:true})
    contentComplaints?: ContentComplaintCreateNestedManyWithoutComplaintReasonInput;
}
