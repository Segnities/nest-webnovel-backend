import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class NotificationTypeWhereInput {

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    AND?: Array<NotificationTypeWhereInput>;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    OR?: Array<NotificationTypeWhereInput>;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    NOT?: Array<NotificationTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
