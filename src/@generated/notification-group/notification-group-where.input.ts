import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { NotificationGroupNullableRelationFilter } from './notification-group-nullable-relation-filter.input';
import { NotificationGroupListRelationFilter } from './notification-group-list-relation-filter.input';
import { NotificationListRelationFilter } from '../notification/notification-list-relation-filter.input';

@InputType()
export class NotificationGroupWhereInput {

    @Field(() => [NotificationGroupWhereInput], {nullable:true})
    AND?: Array<NotificationGroupWhereInput>;

    @Field(() => [NotificationGroupWhereInput], {nullable:true})
    OR?: Array<NotificationGroupWhereInput>;

    @Field(() => [NotificationGroupWhereInput], {nullable:true})
    NOT?: Array<NotificationGroupWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    isDefault?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    parentGroupId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => NotificationGroupNullableRelationFilter, {nullable:true})
    parentGroup?: NotificationGroupNullableRelationFilter;

    @Field(() => NotificationGroupListRelationFilter, {nullable:true})
    childGroups?: NotificationGroupListRelationFilter;

    @Field(() => NotificationListRelationFilter, {nullable:true})
    notifications?: NotificationListRelationFilter;
}
