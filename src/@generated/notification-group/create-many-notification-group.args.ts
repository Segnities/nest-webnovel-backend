import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupCreateManyInput } from './notification-group-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotificationGroupArgs {

    @Field(() => [NotificationGroupCreateManyInput], {nullable:false})
    @Type(() => NotificationGroupCreateManyInput)
    data!: Array<NotificationGroupCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
