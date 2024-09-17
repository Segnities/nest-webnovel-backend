import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppelaReasonUpdateManyMutationInput } from './appela-reason-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AppelaReasonWhereInput } from './appela-reason-where.input';

@ArgsType()
export class UpdateManyAppelaReasonArgs {

    @Field(() => AppelaReasonUpdateManyMutationInput, {nullable:false})
    @Type(() => AppelaReasonUpdateManyMutationInput)
    data!: AppelaReasonUpdateManyMutationInput;

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    @Type(() => AppelaReasonWhereInput)
    where?: AppelaReasonWhereInput;
}
