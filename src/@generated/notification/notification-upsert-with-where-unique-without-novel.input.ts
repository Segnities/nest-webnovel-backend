import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutNovelInput } from './notification-update-without-novel.input';
import { NotificationCreateWithoutNovelInput } from './notification-create-without-novel.input';

@InputType()
export class NotificationUpsertWithWhereUniqueWithoutNovelInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutNovelInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutNovelInput)
    update!: NotificationUpdateWithoutNovelInput;

    @Field(() => NotificationCreateWithoutNovelInput, {nullable:false})
    @Type(() => NotificationCreateWithoutNovelInput)
    create!: NotificationCreateWithoutNovelInput;
}
