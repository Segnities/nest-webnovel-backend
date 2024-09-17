import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationRelatedEntity } from './notification-related-entity.enum';
import { NestedEnumNotificationRelatedEntityFilter } from './nested-enum-notification-related-entity-filter.input';

@InputType()
export class EnumNotificationRelatedEntityFilter {

    @Field(() => NotificationRelatedEntity, {nullable:true})
    equals?: keyof typeof NotificationRelatedEntity;

    @Field(() => [NotificationRelatedEntity], {nullable:true})
    in?: Array<keyof typeof NotificationRelatedEntity>;

    @Field(() => [NotificationRelatedEntity], {nullable:true})
    notIn?: Array<keyof typeof NotificationRelatedEntity>;

    @Field(() => NestedEnumNotificationRelatedEntityFilter, {nullable:true})
    not?: NestedEnumNotificationRelatedEntityFilter;
}
