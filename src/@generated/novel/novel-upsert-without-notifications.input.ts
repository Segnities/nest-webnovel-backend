import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelUpdateWithoutNotificationsInput } from './novel-update-without-notifications.input';
import { Type } from 'class-transformer';
import { NovelCreateWithoutNotificationsInput } from './novel-create-without-notifications.input';
import { NovelWhereInput } from './novel-where.input';

@InputType()
export class NovelUpsertWithoutNotificationsInput {

    @Field(() => NovelUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNotificationsInput)
    update!: NovelUpdateWithoutNotificationsInput;

    @Field(() => NovelCreateWithoutNotificationsInput, {nullable:false})
    @Type(() => NovelCreateWithoutNotificationsInput)
    create!: NovelCreateWithoutNotificationsInput;

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;
}
