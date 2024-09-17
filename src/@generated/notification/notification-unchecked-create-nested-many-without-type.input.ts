import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutTypeInput } from './notification-create-without-type.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutTypeInput } from './notification-create-or-connect-without-type.input';
import { NotificationCreateManyTypeInputEnvelope } from './notification-create-many-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationUncheckedCreateNestedManyWithoutTypeInput {

    @Field(() => [NotificationCreateWithoutTypeInput], {nullable:true})
    @Type(() => NotificationCreateWithoutTypeInput)
    create?: Array<NotificationCreateWithoutTypeInput>;

    @Field(() => [NotificationCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => NotificationCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<NotificationCreateOrConnectWithoutTypeInput>;

    @Field(() => NotificationCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => NotificationCreateManyTypeInputEnvelope)
    createMany?: NotificationCreateManyTypeInputEnvelope;

    @Field(() => [NotificationWhereUniqueInput], {nullable:true})
    @Type(() => NotificationWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
