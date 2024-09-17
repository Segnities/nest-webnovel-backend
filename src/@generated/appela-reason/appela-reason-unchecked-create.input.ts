import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppealUncheckedCreateNestedManyWithoutAppealInput } from '../appeal/appeal-unchecked-create-nested-many-without-appeal.input';

@InputType()
export class AppelaReasonUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => AppealUncheckedCreateNestedManyWithoutAppealInput, {nullable:true})
    appeals?: AppealUncheckedCreateNestedManyWithoutAppealInput;
}
