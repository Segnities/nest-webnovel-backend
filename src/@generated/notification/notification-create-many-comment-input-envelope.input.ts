import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyCommentInput } from './notification-create-many-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyCommentInputEnvelope {

    @Field(() => [NotificationCreateManyCommentInput], {nullable:false})
    @Type(() => NotificationCreateManyCommentInput)
    data!: Array<NotificationCreateManyCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
