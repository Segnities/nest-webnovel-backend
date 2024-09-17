import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutNovelInput } from './notification-update-without-novel.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutNovelInput {

    @Field(() => NotificationWhereUniqueInput, {nullable:false})
    @Type(() => NotificationWhereUniqueInput)
    where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

    @Field(() => NotificationUpdateWithoutNovelInput, {nullable:false})
    @Type(() => NotificationUpdateWithoutNovelInput)
    data!: NotificationUpdateWithoutNovelInput;
}
