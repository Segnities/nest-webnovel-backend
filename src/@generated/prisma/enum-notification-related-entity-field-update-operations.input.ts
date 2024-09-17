import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationRelatedEntity } from './notification-related-entity.enum';

@InputType()
export class EnumNotificationRelatedEntityFieldUpdateOperationsInput {

    @Field(() => NotificationRelatedEntity, {nullable:true})
    set?: keyof typeof NotificationRelatedEntity;
}
