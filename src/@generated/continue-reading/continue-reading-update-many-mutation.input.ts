import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';

@InputType()
export class ContinueReadingUpdateManyMutationInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    progressPercentage?: FloatFieldUpdateOperationsInput;
}
