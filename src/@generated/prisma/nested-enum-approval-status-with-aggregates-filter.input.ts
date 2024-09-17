import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from './approval-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumApprovalStatusFilter } from './nested-enum-approval-status-filter.input';

@InputType()
export class NestedEnumApprovalStatusWithAggregatesFilter {

    @Field(() => ApprovalStatus, {nullable:true})
    equals?: keyof typeof ApprovalStatus;

    @Field(() => [ApprovalStatus], {nullable:true})
    in?: Array<keyof typeof ApprovalStatus>;

    @Field(() => [ApprovalStatus], {nullable:true})
    notIn?: Array<keyof typeof ApprovalStatus>;

    @Field(() => NestedEnumApprovalStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumApprovalStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumApprovalStatusFilter, {nullable:true})
    _min?: NestedEnumApprovalStatusFilter;

    @Field(() => NestedEnumApprovalStatusFilter, {nullable:true})
    _max?: NestedEnumApprovalStatusFilter;
}
