import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutCommentInput } from './notification-create-without-comment.input';

@InputType()
export class NotificationCreateOrConnectWithoutCommentInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationCreateWithoutCommentInput, {nullable:false})
    @Type(() => NotificationCreateWithoutCommentInput)
    create!: NotificationCreateWithoutCommentInput;
}
