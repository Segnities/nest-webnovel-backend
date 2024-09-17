import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateManyParentGroupInput } from './notification-group-create-many-parent-group.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationGroupCreateManyParentGroupInputEnvelope {

    @Field(() => [NotificationGroupCreateManyParentGroupInput], {nullable:false})
    @Type(() => NotificationGroupCreateManyParentGroupInput)
    data!: Array<NotificationGroupCreateManyParentGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
