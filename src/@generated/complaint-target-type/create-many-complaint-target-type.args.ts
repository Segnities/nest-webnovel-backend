import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplaintTargetTypeCreateManyInput } from './complaint-target-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyComplaintTargetTypeArgs {

    @Field(() => [ComplaintTargetTypeCreateManyInput], {nullable:false})
    @Type(() => ComplaintTargetTypeCreateManyInput)
    data!: Array<ComplaintTargetTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
