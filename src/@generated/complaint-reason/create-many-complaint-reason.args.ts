import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintReasonCreateManyInput } from './complaint-reason-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyComplaintReasonArgs {

    @Field(() => [ComplaintReasonCreateManyInput], {nullable:false})
    @Type(() => ComplaintReasonCreateManyInput)
    data!: Array<ComplaintReasonCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
