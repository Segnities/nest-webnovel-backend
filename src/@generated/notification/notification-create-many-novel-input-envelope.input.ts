import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyNovelInput } from './notification-create-many-novel.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyNovelInputEnvelope {

    @Field(() => [NotificationCreateManyNovelInput], {nullable:false})
    @Type(() => NotificationCreateManyNovelInput)
    data!: Array<NotificationCreateManyNovelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
