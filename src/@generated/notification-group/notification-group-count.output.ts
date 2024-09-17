import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotificationGroupCount {

    @Field(() => Int, {nullable:false})
    childGroups?: number;

    @Field(() => Int, {nullable:false})
    notifications?: number;
}
