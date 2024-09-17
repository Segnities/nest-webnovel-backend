import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationGroupCreateWithoutParentGroupInput } from './notification-group-create-without-parent-group.input';
import { Type } from 'class-transformer';
import { NotificationGroupCreateOrConnectWithoutParentGroupInput } from './notification-group-create-or-connect-without-parent-group.input';
import { NotificationGroupUpsertWithWhereUniqueWithoutParentGroupInput } from './notification-group-upsert-with-where-unique-without-parent-group.input';
import { NotificationGroupCreateManyParentGroupInputEnvelope } from './notification-group-create-many-parent-group-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationGroupWhereUniqueInput } from './notification-group-where-unique.input';
import { NotificationGroupUpdateWithWhereUniqueWithoutParentGroupInput } from './notification-group-update-with-where-unique-without-parent-group.input';
import { NotificationGroupUpdateManyWithWhereWithoutParentGroupInput } from './notification-group-update-many-with-where-without-parent-group.input';
import { NotificationGroupScalarWhereInput } from './notification-group-scalar-where.input';

@InputType()
export class NotificationGroupUpdateManyWithoutParentGroupNestedInput {

    @Field(() => [NotificationGroupCreateWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupCreateWithoutParentGroupInput)
    create?: Array<NotificationGroupCreateWithoutParentGroupInput>;

    @Field(() => [NotificationGroupCreateOrConnectWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupCreateOrConnectWithoutParentGroupInput)
    connectOrCreate?: Array<NotificationGroupCreateOrConnectWithoutParentGroupInput>;

    @Field(() => [NotificationGroupUpsertWithWhereUniqueWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupUpsertWithWhereUniqueWithoutParentGroupInput)
    upsert?: Array<NotificationGroupUpsertWithWhereUniqueWithoutParentGroupInput>;

    @Field(() => NotificationGroupCreateManyParentGroupInputEnvelope, {nullable:true})
    @Type(() => NotificationGroupCreateManyParentGroupInputEnvelope)
    createMany?: NotificationGroupCreateManyParentGroupInputEnvelope;

    @Field(() => [NotificationGroupWhereUniqueInput], {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationGroupWhereUniqueInput], {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationGroupWhereUniqueInput], {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationGroupWhereUniqueInput], {nullable:true})
    @Type(() => NotificationGroupWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationGroupWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationGroupUpdateWithWhereUniqueWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupUpdateWithWhereUniqueWithoutParentGroupInput)
    update?: Array<NotificationGroupUpdateWithWhereUniqueWithoutParentGroupInput>;

    @Field(() => [NotificationGroupUpdateManyWithWhereWithoutParentGroupInput], {nullable:true})
    @Type(() => NotificationGroupUpdateManyWithWhereWithoutParentGroupInput)
    updateMany?: Array<NotificationGroupUpdateManyWithWhereWithoutParentGroupInput>;

    @Field(() => [NotificationGroupScalarWhereInput], {nullable:true})
    @Type(() => NotificationGroupScalarWhereInput)
    deleteMany?: Array<NotificationGroupScalarWhereInput>;
}
