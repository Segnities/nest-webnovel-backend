import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutNotificationsInput } from './comment-update-without-notifications.input';

@InputType()
export class CommentUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => CommentUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => CommentUpdateWithoutNotificationsInput)
    data!: CommentUpdateWithoutNotificationsInput;
}
