import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutCommentInput } from './notification-create-without-comment.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutCommentInput } from './notification-create-or-connect-without-comment.input';
import { NotificationUpsertWithWhereUniqueWithoutCommentInput } from './notification-upsert-with-where-unique-without-comment.input';
import { NotificationCreateManyCommentInputEnvelope } from './notification-create-many-comment-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutCommentInput } from './notification-update-with-where-unique-without-comment.input';
import { NotificationUpdateManyWithWhereWithoutCommentInput } from './notification-update-many-with-where-without-comment.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUncheckedUpdateManyWithoutCommentNestedInput {

    @Field(() => [NotificationCreateWithoutCommentInput], {nullable:true})
    @Type(() => NotificationCreateWithoutCommentInput)
    create?: Array<NotificationCreateWithoutCommentInput>;

    @Field(() => [NotificationCreateOrConnectWithoutCommentInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutCommentInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutCommentInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutCommentInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutCommentInput>;

    @Field(() => NotificationCreateManyCommentInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyCommentInputEnvelope)
    createMany?: NotificationCreateManyCommentInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutCommentInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutCommentInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutCommentInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutCommentInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutCommentInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutCommentInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
