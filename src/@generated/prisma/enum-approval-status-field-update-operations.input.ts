import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ApprovalStatus } from './approval-status.enum';

@InputType()
export class EnumApprovalStatusFieldUpdateOperationsInput {

    @Field(() => ApprovalStatus, {nullable:true})
    set?: keyof typeof ApprovalStatus;
}
