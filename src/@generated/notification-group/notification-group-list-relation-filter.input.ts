import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';

@InputType()
export class NotificationGroupListRelationFilter {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    every?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    some?: NotificationGroupWhereInput;

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    none?: NotificationGroupWhereInput;
}
