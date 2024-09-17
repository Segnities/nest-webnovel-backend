import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutCommentInput } from './notification-create-without-comment.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutCommentInput } from './notification-create-or-connect-without-comment.input';
import { NotificationCreateManyCommentInputEnvelope } from './notification-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedManyWithoutCommentInput {

    @Field(() => [NotificationCreateWithoutCommentInput], {nullable:true})
    @Type(() => NotificationCreateWithoutCommentInput)
    create?: Array<NotificationCreateWithoutCommentInput>;

    @Field(() => [NotificationCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutCommentInput>;

    @Field(() => NotificationCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyCommentInputEnvelope)
    createMany?: NotificationCreateManyCommentInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
