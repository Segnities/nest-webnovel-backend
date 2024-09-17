import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealCreateNestedManyWithoutAppealInput } from '../appeal/appeal-create-nested-many-without-appeal.input';

@InputType()
export class AppelaReasonCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => AppealCreateNestedManyWithoutAppealInput, {nullable:true})
    appeals?: AppealCreateNestedManyWithoutAppealInput;
}
