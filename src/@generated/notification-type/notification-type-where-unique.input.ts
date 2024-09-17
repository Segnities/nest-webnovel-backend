import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class NotificationTypeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    AND?: Array<NotificationTypeWhereInput>;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    OR?: Array<NotificationTypeWhereInput>;

    @Field(() => [NotificationTypeWhereInput], {nullable:true})
    NOT?: Array<NotificationTypeWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
