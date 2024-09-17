import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from './approval-status.enum';
import { NestedEnumApprovalStatusFilter } from './nested-enum-approval-status-filter.input';

@InputType()
export class EnumApprovalStatusFilter {

    @Field(() => ApprovalStatus, {nullable:true})
    equals?: keyof typeof ApprovalStatus;

    @Field(() => [ApprovalStatus], {nullable:true})
    in?: Array<keyof typeof ApprovalStatus>;

    @Field(() => [ApprovalStatus], {nullable:true})
    notIn?: Array<keyof typeof ApprovalStatus>;

    @Field(() => NestedEnumApprovalStatusFilter, {nullable:true})
    not?: NestedEnumApprovalStatusFilter;
}
