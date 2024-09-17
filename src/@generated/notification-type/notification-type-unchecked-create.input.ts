import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationUncheckedCreateNestedManyWithoutTypeInput } from '../notification/notification-unchecked-create-nested-many-without-type.input';

@InputType()
export class NotificationTypeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => NotificationUncheckedCreateNestedManyWithoutTypeInput, {nullable:true})
    notifications?: NotificationUncheckedCreateNestedManyWithoutTypeInput;
}
