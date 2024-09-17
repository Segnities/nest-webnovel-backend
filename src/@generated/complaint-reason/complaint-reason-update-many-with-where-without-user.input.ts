import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplaintReasonScalarWhereInput } from './complaint-reason-scalar-where.input';
import { Type } from 'class-transformer';
import { ComplaintReasonUpdateManyMutationInput } from './complaint-reason-update-many-mutation.input';

@InputType()
export class ComplaintReasonUpdateManyWithWhereWithoutUserInput {

    @Field(() => ComplaintReasonScalarWhereInput, {nullable:false})
    @Type(() => ComplaintReasonScalarWhereInput)
    where!: ComplaintReasonScalarWhereInput;

    @Field(() => ComplaintReasonUpdateManyMutationInput, {nullable:false})
    @Type(() => ComplaintReasonUpdateManyMutationInput)
    data!: ComplaintReasonUpdateManyMutationInput;
}
