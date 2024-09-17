import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutIssuedBansNestedInput } from '../user/user-update-one-required-without-issued-bans-nested.input';
import { UserUpdateOneRequiredWithoutUserBansNestedInput } from '../user/user-update-one-required-without-user-bans-nested.input';
import { ComplaintTargetTypeUpdateOneRequiredWithoutBansNestedInput } from '../complaint-target-type/complaint-target-type-update-one-required-without-bans-nested.input';

@InputType()
export class BanUpdateWithoutAppealInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    banStart?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    banEnd?: DateTimeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    appealed?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutIssuedBansNestedInput, {nullable:true})
    issuedByUser?: UserUpdateOneRequiredWithoutIssuedBansNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutUserBansNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutUserBansNestedInput;

    @Field(() => ComplaintTargetTypeUpdateOneRequiredWithoutBansNestedInput, {nullable:true})
    complaintTargetType?: ComplaintTargetTypeUpdateOneRequiredWithoutBansNestedInput;
}
