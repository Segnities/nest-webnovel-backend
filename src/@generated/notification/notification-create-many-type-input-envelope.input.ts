import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyTypeInput } from './notification-create-many-type.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyTypeInputEnvelope {

    @Field(() => [NotificationCreateManyTypeInput], {nullable:false})
    @Type(() => NotificationCreateManyTypeInput)
    data!: Array<NotificationCreateManyTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
