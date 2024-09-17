import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateWithoutNotificationsInput } from './comment-update-without-notifications.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutNotificationsInput } from './comment-create-without-notifications.input';
import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentUpsertWithoutNotificationsInput {

    @Field(() => CommentUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => CommentUpdateWithoutNotificationsInput)
    update!: CommentUpdateWithoutNotificationsInput;

    @Field(() => CommentCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => CommentCreateWithoutNotificationsInput)
    create!: CommentCreateWithoutNotificationsInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;
}
