import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NovelWhereUniqueInput } from './novel-where-unique.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNotificationsInput } from './novel-create-without-notifications.input';

@InputType()
export class NovelCreateOrConnectWithoutNotificationsInput {

    @Field(() => NovelWhereUniqueInput, {nullable:false})
    @Type(() => NovelWhereUniqueInput)
    where!: Prisma.AtLeast<NovelWhereUniqueInput, 'id'>;

    @Field(() => NovelCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => NovelCreateWithoutNotificationsInput)
    create!: NovelCreateWithoutNotificationsInput;
}
