import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContentComplaintSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    contentId?: true;

    @Field(() => Boolean, {nullable:true})
    reasonId?: true;

    @Field(() => Boolean, {nullable:true})
    complaintTargetId?: true;

    @Field(() => Boolean, {nullable:true})
    issuedBy?: true;

    @Field(() => Boolean, {nullable:true})
    resolvedBy?: true;
}
