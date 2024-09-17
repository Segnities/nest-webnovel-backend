import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonCreateInput } from './appela-reason-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppelaReasonArgs {

    @Field(() => AppelaReasonCreateInput, {nullable:false})
    @Type(() => AppelaReasonCreateInput)
    data!: AppelaReasonCreateInput;
}
