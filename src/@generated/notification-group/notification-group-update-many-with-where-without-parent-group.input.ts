import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupScalarWhereInput } from './notification-group-scalar-where.input';
import { Type } from 'class-transformer';
import { NotificationGroupUpdateManyMutationInput } from './notification-group-update-many-mutation.input';

@InputType()
export class NotificationGroupUpdateManyWithWhereWithoutParentGroupInput {

    @Field(() => NotificationGroupScalarWhereInput, {nullable:false})
    @Type(() => NotificationGroupScalarWhereInput)
    where!: NotificationGroupScalarWhereInput;

    @Field(() => NotificationGroupUpdateManyMutationInput, {nullable:false})
    @Type(() => NotificationGroupUpdateManyMutationInput)
    data!: NotificationGroupUpdateManyMutationInput;
}
