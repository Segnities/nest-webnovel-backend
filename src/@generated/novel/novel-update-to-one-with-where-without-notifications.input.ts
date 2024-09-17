import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NovelWhereInput } from './novel-where.input';
import { Type } from 'class-transformer';
import { NovelUpdateWithoutNotificationsInput } from './novel-update-without-notifications.input';

@InputType()
export class NovelUpdateToOneWithWhereWithoutNotificationsInput {

    @Field(() => NovelWhereInput, {nullable:true})
    @Type(() => NovelWhereInput)
    where?: NovelWhereInput;

    @Field(() => NovelUpdateWithoutNotificationsInput, {nullable:false})
    @Type(() => NovelUpdateWithoutNotificationsInput)
    data!: NovelUpdateWithoutNotificationsInput;
}
