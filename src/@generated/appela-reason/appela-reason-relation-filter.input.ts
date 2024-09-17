import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppelaReasonWhereInput } from './appela-reason-where.input';

@InputType()
export class AppelaReasonRelationFilter {

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    is?: AppelaReasonWhereInput;

    @Field(() => AppelaReasonWhereInput, {nullable:true})
    isNot?: AppelaReasonWhereInput;
}
