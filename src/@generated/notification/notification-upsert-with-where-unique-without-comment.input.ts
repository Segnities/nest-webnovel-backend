import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutCommentInput } from './notification-update-without-comment.input';
import { NotificationCreateWithoutCommentInput } from './notification-create-without-comment.input';

@InputType()
export class NotificationUpsertWithWhereUniqueWithoutCommentInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutCommentInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutCommentInput)
    update!: NotificationUpdateWithoutCommentInput;

    @Field(() => NotificationCreateWithoutCommentInput, {nullable:false})
    @Type(() => NotificationCreateWithoutCommentInput)
    create!: NotificationCreateWithoutCommentInput;
}
