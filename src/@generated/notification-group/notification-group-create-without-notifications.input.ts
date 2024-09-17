import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateNestedOneWithoutChildGroupsInput } from './notification-group-create-nested-one-without-child-groups.input';
import { NotificationGroupCreateNestedManyWithoutParentGroupInput } from './notification-group-create-nested-many-without-parent-group.input';

@InputType()
export class NotificationGroupCreateWithoutNotificationsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Boolean, {nullable:true})
    isDefault?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NotificationGroupCreateNestedOneWithoutChildGroupsInput, {nullable:true})
    parentGroup?: NotificationGroupCreateNestedOneWithoutChildGroupsInput;

    @Field(() => NotificationGroupCreateNestedManyWithoutParentGroupInput, {nullable:true})
    childGroups?: NotificationGroupCreateNestedManyWithoutParentGroupInput;
}
