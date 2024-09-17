import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';

@InputType()
export class NotificationGroupNullableRelationFilter {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    is?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    isNot?: NotificationGroupWhereInput;
}
