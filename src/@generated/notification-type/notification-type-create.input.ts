import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateNestedManyWithoutTypeInput } from '../notification/notification-create-nested-many-without-type.input';

@InputType()
export class NotificationTypeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => NotificationCreateNestedManyWithoutTypeInput, {nullable:true})
    notifications?: NotificationCreateNestedManyWithoutTypeInput;
}
