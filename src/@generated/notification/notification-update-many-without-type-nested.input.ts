import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutTypeInput } from './notification-create-without-type.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutTypeInput } from './notification-create-or-connect-without-type.input';
import { NotificationUpsertWithWhereUniqueWithoutTypeInput } from './notification-upsert-with-where-unique-without-type.input';
import { NotificationCreateManyTypeInputEnvelope } from './notification-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutTypeInput } from './notification-update-with-where-unique-without-type.input';
import { NotificationUpdateManyWithWhereWithoutTypeInput } from './notification-update-many-with-where-without-type.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUpdateManyWithoutTypeNestedInput {

    @Field(() => [NotificationCreateWithoutTypeInput], {nullable:true})
    @Type(() => NotificationCreateWithoutTypeInput)
    create?: Array<NotificationCreateWithoutTypeInput>;

    @Field(() => [NotificationCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutTypeInput>;

    @Field(() => [NotificationUpsertWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => NotificationUpsertWithWhereUniqueWithoutTypeInput)
    upsert?: Array<NotificationUpsertWithWhereUniqueWithoutTypeInput>;

    @Field(() => NotificationCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyTypeInputEnvelope)
    createMany?: NotificationCreateManyTypeInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

    @Field(() => [NotificationUpdateWithWhereUniqueWithoutTypeInput], {nullable:true})
    @Type(() => NotificationUpdateWithWhereUniqueWithoutTypeInput)
    update?: Array<NotificationUpdateWithWhereUniqueWithoutTypeInput>;

    @Field(() => [NotificationUpdateManyWithWhereWithoutTypeInput], {nullable:true})
    @Type(() => NotificationUpdateManyWithWhereWithoutTypeInput)
    updateMany?: Array<NotificationUpdateManyWithWhereWithoutTypeInput>;

    @Field(() => [NotificationScalarWhereInput], {nullable:true})
    @Type(() => NotificationScalarWhereInput)
    deleteMany?: Array<NotificationScalarWhereInput>;
}
