import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateWithoutParentGroupInput } from './notification-group-create-without-parent-group.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateOrConnectWithoutParentGroupInput } from './notification-group-create-or-connect-without-parent-group.input';
import { NotificationGroupCreateManyParentGroupInputEnvelope } from './notification-group-create-many-parent-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';

@InputType()
export class NotificationGroupUncheckedCreateNestedManyWithoutParentGroupInput {

    @Field(() => [NotificationGroupCreateWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupCreateWithoutParentGroupInput)
    create?: Array<NotificationGroupCreateWithoutParentGroupInput>;

    @Field(() => [NotificationGroupCreateOrConnectWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupCreateOrConnectWithoutParentGroupInput)
    connectOrCreate?: Array<NotificationGroupCreateOrConnectWithoutParentGroupInput>;

    @Field(() => NotificationGroupCreateManyParentGroupInputEnvelope, {nullable:true})
    @Type(() => NotificationGroupCreateManyParentGroupInputEnvelope)
    createMany?: NotificationGroupCreateManyParentGroupInputEnvelope;

    @Field(() => [NotificationGroupWhereUniqueInput], {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>>;
}
