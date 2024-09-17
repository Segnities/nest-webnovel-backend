import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyAuthorInput } from './notification-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyAuthorInputEnvelope {

    @Field(() => [NotificationCreateManyAuthorInput], {nullable:false})
    @Type(() => NotificationCreateManyAuthorInput)
    data!: Array<NotificationCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
