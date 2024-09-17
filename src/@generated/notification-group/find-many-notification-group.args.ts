import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationGroupWhereInput } from './notification-group-where.input';
import { Type } from 'class-transformer';
import { NotificationGroupOrderByWithRelationInput } from './notification-group-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationGroupScalarFieldEnum } from './notification-group-scalar-field.enum';

@ArgsType()
export class FindManyNotificationGroupArgs {

    @Field(() => NotificationGroupWhereInput, {nullable:true})
    @Type(() => NotificationGroupWhereInput)
    where?: NotificationGroupWhereInput;

    @Field(() => [NotificationGroupOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotificationGroupOrderByWithRelationInput>;

    @Field(() => NotificationGroupWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NotificationGroupScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotificationGroupScalarFieldEnum>;
}
