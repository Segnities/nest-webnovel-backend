import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationGroupUncheckedCreateNestedManyWithoutParentGroupInput } from './notification-group-unchecked-create-nested-many-without-parent-group.input';

@InputType()
export class NotificationGroupUncheckedCreateWithoutNotificationsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => Int, {nullable:true})
    parentGroupId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NotificationGroupUncheckedCreateNestedManyWithoutParentGroupInput, {nullable:true})
    childGroups?: NotificationGroupUncheckedCreateNestedManyWithoutParentGroupInput;
}
