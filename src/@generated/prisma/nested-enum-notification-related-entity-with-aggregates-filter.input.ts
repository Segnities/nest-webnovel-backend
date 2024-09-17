import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationRelatedEntity } from './notification-related-entity.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumNotificationRelatedEntityFilter } from './nested-enum-notification-related-entity-filter.input';

@InputType()
export class NestedEnumNotificationRelatedEntityWithAggregatesFilter {

    @Field(() => NotificationRelatedEntity, {nullable:true})
    equals?: keyof typeof NotificationRelatedEntity;

    @Field(() => [NotificationRelatedEntity], {nullable:true})
    in?: Array<keyof typeof NotificationRelatedEntity>;

    @Field(() => [NotificationRelatedEntity], {nullable:true})
    notIn?: Array<keyof typeof NotificationRelatedEntity>;

    @Field(() => NestedEnumNotificationRelatedEntityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumNotificationRelatedEntityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumNotificationRelatedEntityFilter, {nullable:true})
    _min?: NestedEnumNotificationRelatedEntityFilter;

    @Field(() => NestedEnumNotificationRelatedEntityFilter, {nullable:true})
    _max?: NestedEnumNotificationRelatedEntityFilter;
}
